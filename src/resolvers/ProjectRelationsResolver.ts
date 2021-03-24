import { PrismaClient } from "@prisma/client";
import { Args, Ctx, FieldResolver, Resolver, Root } from "type-graphql";
import { Inject, Service } from "typedi";
import { Project, User } from "../../prisma/generated/type-graphql";
import { Context } from "../app";
import { NotFoundError } from "../errors";
import { ProjectsFilter, ProjectsUserFilter } from "../ProjectTypes";

@Service()
@Resolver(_of => Project)
export default class ProjectRelationsResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    async authFieldResolver<K extends keyof Project>(fieldName: K, project: Project, context: Context): Promise<Project[K]> {
        const proj = await this.p.project.findUnique({
            where: {
                id: project.id
            },
            include: {
                [fieldName]: true
            }
        });
    
        if (!proj || (!proj.isPublic && proj.userId !== context.user?.uid))
            // If the user cannot access the project don't indicate that the project exists
            throw new NotFoundError(`Project not found`);
        
        // @ts-ignore
        return proj[fieldName];
    }

    @FieldResolver(returns => User, { nullable: false })
    async user(@Root() project: Project, @Ctx() context: Context) {
        return await this.authFieldResolver("user", project, context);
    }

    @FieldResolver(returns => Project, { nullable: true })
    async parent(@Root() project: Project, @Ctx() context: Context) {
        return await this.authFieldResolver("parent", project, context);
    }

    @FieldResolver(returns => [Project], { nullable: true })
    async children(@Root() project: Project, @Ctx() context: Context, @Args() args: ProjectsFilter) {
        const children = await this.authFieldResolver("children", project, context);
        return children?.filter(child => child.isPublic || child.userId === context.user?.uid);
    }
}