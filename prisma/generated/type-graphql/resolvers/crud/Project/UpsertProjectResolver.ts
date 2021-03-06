import * as TypeGraphQL from "type-graphql";
import { UpsertProjectArgs } from "./args/UpsertProjectArgs";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class UpsertProjectResolver {
  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: false
  })
  async upsertProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProjectArgs): Promise<Project> {
    return getPrismaFromContext(ctx).project.upsert(args);
  }
}
