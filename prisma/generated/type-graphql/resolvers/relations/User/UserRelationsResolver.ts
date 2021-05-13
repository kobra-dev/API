import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { UserProjectsArgs } from "./args/UserProjectsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserProjectsArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).projects(args);
  }
}
