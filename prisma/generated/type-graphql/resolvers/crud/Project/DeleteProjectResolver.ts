import * as TypeGraphQL from "type-graphql";
import { DeleteProjectArgs } from "./args/DeleteProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class DeleteProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: true
  })
  async deleteProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.delete(args);
  }
}
