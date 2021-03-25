import { Prisma, PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { Project } from "../../prisma/generated/type-graphql";
import { Context } from "../app";
import { NotAuthorizedError, NotFoundError } from "../errors";
import { EditProjectInput, NewProjectInput, ProjectsFilter } from "../ProjectTypes";
import { projectsUserFilterToFindManyArgs } from "./UserRelationsResolver";

export const projectsFilterToFindManyArgs = (filter: ProjectsFilter, context: Context): Prisma.ProjectFindManyArgs => (
    {
        ...projectsUserFilterToFindManyArgs(filter, context, {
            ...(filter.user ? {
                userId: filter.user
            } : undefined),
        })
    }
);

@Service()
@Resolver(Project)
export default class ProjectResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    @Query(returns => Project, { nullable: true })
    async project(@Arg("id") id: string, @Ctx() context: Context) {
        const proj = await this.p.project.findFirst({
            where: {
                id
            },
            include: {
                user: {
                    select: {
                        name: true
                    }
                }
            }
        });

        if (!proj || (!proj.isPublic && proj.userId !== context.user?.uid))
            // If the user cannot access the project don't indicate that the project exists
            throw new NotFoundError(`Project with ID ${id} not found`);

        return proj;
    }

    @Query(returns => [Project])
    async projects(@Args() filter: ProjectsFilter, @Ctx() context: Context) {
        return await this.p.project.findMany(projectsFilterToFindManyArgs(filter, context));
    }

    @Mutation(returns => Project)
    async addProject(@Args() newProjectData: NewProjectInput, @Ctx() context: Context) {
        if (!context.user) throw new NotAuthorizedError("Must include ID token to add project");
        return await this.p.project.create({
            data: {
                id: nanoid(),
                userId: context.user.uid,
                ...newProjectData
            }
        });
    }

    async verifyUserCanModifyProject(id: string, context: Context) {
        if (!context.user) throw new NotAuthorizedError("Must include ID token to modify project");
        const proj = await this.p.project.findFirst({
            where: {
                id
            }
        });

        const canEdit = proj?.userId === context.user.uid;

        if (!proj || (!canEdit && !proj.isPublic)) {
            throw new NotFoundError(`Project with ID ${id} not found`);
        }
        else if (!canEdit) {
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

        // Get project to remove relation
        const proj = await this.p.project.findUnique({
            where: {
                id
            },
            include: {
                children: true
            }
        });
        if (proj?.children) {
            await Promise.all(proj?.children.map(async child => await this.p.project.update({
                where: {
                    id: child.id
                },
                data: {
                    parentId: null
                }
            })));
        }

        return await this.p.project.delete({
            where: {
                id
            }
        });
    }
}