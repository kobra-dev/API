import * as TypeGraphQL from "type-graphql";
import { FindFirstProjectArgs } from "./args/FindFirstProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class FindFirstProjectResolver {
  @TypeGraphQL.Query(_returns => Project, {
    nullable: true
  })
  async findFirstProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.findFirst(args);
  }
}
