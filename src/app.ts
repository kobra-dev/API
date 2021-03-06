import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { Arg, Args, Authorized, buildSchema, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Container, Inject, Service } from "typedi";
import { auth0AuthChecker } from "./authChecker";
import jwt, { JwtHeader, SigningKeyCallback, VerifyOptions } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { NewProjectInput, EditProjectInput, ProjectsFilter } from "./ProjectTypes";
import { PrismaClient } from "@prisma/client";
import { Project } from "../prisma/generated/type-graphql";
import { nanoid } from "nanoid";

import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

@Service()
@Resolver(Project)
class ProjectResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    @Authorized()
    @Query(returns => Project, { nullable: true })
    async project(@Arg("id") id: string) {
        return await this.p.project.findFirst({
            where: {
                id
            }
        });
    }

    @Query(returns => [Project])
    async projects(@Args() filter: ProjectsFilter, @Ctx() context: any) {
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
                } : undefined)
            },
            skip: filter.skip,
            take: filter.take
        });
    }

    @Authorized()
    @Mutation(returns => Project)
    async addProject(@Args() newProjectData: NewProjectInput, @Ctx() context: any): Promise<Project> {
        console.log(context);
        console.log(await context.user);
        return await this.p.project.create({
            data: {
                id: nanoid(),
                // TODO: get user from the context
                ...newProjectData
            }
        });
    }

    @Mutation(returns => Project)
    async editProject(@Arg("id") id: string, @Args() editProjectData: EditProjectInput): Promise<Project> {
        return await this.p.project.update({
            where: {
                id
            },
            data: Object.fromEntries(Object.entries(editProjectData).filter(([_, v]) => (v != null)))
        });
    }

    @Mutation(returns => Project)
    async removeProject(@Arg("id") id: string) {
        await this.p.project.delete({
            where: {
                id
            }
        });
    }
}

// Dependency injection
Container.set("PRISMA", prisma);

// Authorization
const authClient = jwksClient({
    jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

function getKey(header: JwtHeader, cb: SigningKeyCallback) {
    if(header.kid === undefined) return;
    authClient.getSigningKey(header.kid, function (err, key) {
        var signingKey = key.getPublicKey();
        cb(null, signingKey);
    });
}

const authOptions: VerifyOptions = {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
};

async function main() {
    const schema = await buildSchema({
        resolvers: [ProjectResolver],
        authChecker: auth0AuthChecker,
        container: Container
    });

    const server = new ApolloServer({
        schema,
        playground: true,
        context: ({ req }) => {
            const token = req.headers.authorization;
            if(token === undefined) return { undefined };
            const user = new Promise((resolve, reject) => {
                console.log(token);
                jwt.verify(token, getKey, authOptions, (err, decoded) => {
                    if(err) return reject(err);
                    // @ts-ignore
                    resolve(decoded);
                })
            });

            return { user };
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