import * as TypeGraphQL from "type-graphql";
import { FindUniqueProjectArgs } from "./args/FindUniqueProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class FindUniqueProjectResolver {
  @TypeGraphQL.Query(_returns => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.findUnique(args);
  }
}
