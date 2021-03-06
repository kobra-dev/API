import * as TypeGraphQL from "type-graphql";
import { UpdateProjectArgs } from "./args/UpdateProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class UpdateProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: true
  })
  async updateProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.update(args);
  }
}
