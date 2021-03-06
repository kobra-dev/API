import * as TypeGraphQL from "type-graphql";
import { CreateProjectArgs } from "./args/CreateProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class CreateProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: false
  })
  async createProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProjectArgs): Promise<Project> {
    return getPrismaFromContext(ctx).project.create(args);
  }
}
