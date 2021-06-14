import { Prisma, PrismaClient } from "@prisma/client"
import { Args, Ctx, FieldResolver, Resolver, Root } from "type-graphql"
import { Inject, Service } from "typedi"
import { Project, User } from "../../prisma/generated/type-graphql"
import { Context } from "../app"
import { NotAuthorizedError } from "../errors"
import { ProjectsUserFilter } from "../ProjectTypes"

export const projectsUserFilterToFindManyArgs = (filter: ProjectsUserFilter, context: Context, additionalWhere: Prisma.ProjectWhereInput): Prisma.ProjectFindManyArgs => (
    {
        where: {
            ...additionalWhere,
            ...(filter.searchTerm ? {
                name: {
                    contains: filter.searchTerm,
                    mode: "insensitive"
                }
            } : undefined),
            ...(filter.isPublic !== undefined ? {
                isPublic: filter.isPublic
            } : undefined),
            OR: [
                {
                    userId: context.user?.uid
                },
                {
                    isPublic: true
                }
            ]
        },
        skip: filter.skip,
        take: filter.take,
        ...(filter.sortByNewest ? {
            orderBy: {
                updatedAt: "desc"
            }
        } : undefined)
    }
);

@Service()
@Resolver(_of => User)
export default class UserRelationsResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    @FieldResolver(returns => [Project], { nullable: false })
    async projects(@Root() user: User, @Args() filter: ProjectsUserFilter, @Ctx() context: Context) {
        return await this.p.project.findMany(projectsUserFilterToFindManyArgs(filter, context, { userId: user.id }));
    }

    @FieldResolver(returns => [String], { nullable: true })
    async datasets(@Root() user: User, @Ctx() context: Context) {
        if(user.id !== context.user?.uid) throw new NotAuthorizedError("you can only access your own datasets");
        return user.datasets;
    }
}
