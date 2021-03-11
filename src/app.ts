//#region Imports

// GraphQL
import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { Arg, Args, buildSchema, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Container, Inject, Service } from "typedi";

// Auth
import FirebaseAdmin from "firebase-admin";
import fs from "fs";

// Prisma
import { PrismaClient } from "@prisma/client";
import { Project } from "../prisma/generated/type-graphql";

// Misc
import { nanoid } from "nanoid";
import dotenv from "dotenv";

// Business logic
import { NewProjectInput, EditProjectInput, ProjectsFilter } from "./ProjectTypes";
import { NotFoundError, NotAuthorizedError } from "./errors";

//#endregion

dotenv.config();

const prisma = new PrismaClient();

FirebaseAdmin.initializeApp({
    credential: FirebaseAdmin.credential.cert(
        JSON.parse(fs.readFileSync("./firebase-key.json", "utf-8"))
    )
});

@Service()
@Resolver(Project)
class ProjectResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    @Query(returns => Project, { nullable: true })
    async project(@Arg("id") id: string, @Ctx() context: Context) {
        const proj = await this.p.project.findFirst({
            where: {
                id
            }
        });

        if(!proj || (!proj.isPublic && proj.user !== context.user?.uid))
            // If the user cannot access the project don't indicate that the project exists
            throw new NotFoundError(`Project with ID ${id} not found`);

        return proj;
    }

    @Query(returns => [Project])
    async projects(@Args() filter: ProjectsFilter, @Ctx() context: Context) {
        return await this.p.project.findMany({
            where: {
                ...(filter.user ? {
                    user: filter.user
                } : undefined),
                ...(filter.searchTerm ? {
                    name: {
                        contains: filter.searchTerm,
                        // TODO: fix this
                        //mode: "insensitive"
                    }
                } : undefined),
                OR: [
                    {
                        user: context.user?.uid
                    },
                    {
                        isPublic: true
                    }
                ]
            },
            skip: filter.skip,
            take: filter.take
        });
    }

    @Mutation(returns => Project)
    async addProject(@Args() newProjectData: NewProjectInput, @Ctx() context: Context) {
        if(!context.user) throw new NotAuthorizedError("Must include ID token to add project");
        return await this.p.project.create({
            data: {
                id: nanoid(),
                user: context.user.uid,
                ...newProjectData
            }
        });
    }

    async verifyUserCanModifyProject(id: string, context: Context) {
        if(!context.user) throw new NotAuthorizedError("Must include ID token to modify project");
        const proj = await this.p.project.findFirst({
            where: {
                id
            }
        });

        const canEdit = proj?.user === context.user.uid;

        if(!proj || (!canEdit && !proj.isPublic)) {
            throw new NotFoundError(`Project with ID ${id} not found`);
        }
        else if(!canEdit) {
            throw new NotAuthorizedError("Project user does not match ID token user");
        }
    }

    @Mutation(returns => Project)
    async editProject(@Arg("id") id: string, @Args() editProjectData: EditProjectInput, @Ctx() context: Context) {
        await this.verifyUserCanModifyProject(id, context);

        return await this.p.project.update({
            where: {
                id
            },
            data: Object.fromEntries(Object.entries(editProjectData).filter(([_, v]) => (v != null)))
        });
    }

    @Mutation(returns => Project)
    async removeProject(@Arg("id") id: string, @Ctx() context: Context) {
        await this.verifyUserCanModifyProject(id, context);

        await this.p.project.delete({
            where: {
                id
            }
        });
    }
}

// Dependency injection
Container.set("PRISMA", prisma);

export interface Context {
    user: FirebaseAdmin.auth.DecodedIdToken | undefined
}

async function main() {
    const schema = await buildSchema({
        resolvers: [ProjectResolver],
        //authChecker,
        container: Container
    });

    const server = new ApolloServer({
        schema,
        playground: true,
        context: async ({ req }): Promise<Context> => {
            const token = req.headers.authorization;
            if(token === undefined) return { user: undefined };
            try {
                return {
                    user: await FirebaseAdmin.auth().verifyIdToken(token)
                };
            }
            catch(error) {
                throw new Error("Invalid auth token");
            }
        }
    });

    // Might need to change the port later, 4000 interferes with other things on my computer
    const { url } = await server.listen(4001);
    console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });