import * as TypeGraphQL from "type-graphql";
import { FindManyProjectArgs } from "./args/FindManyProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class FindManyProjectResolver {
  @TypeGraphQL.Query(_returns => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProjectArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).project.findMany(args);
  }
}
