import * as TypeGraphQL from "type-graphql";
import { UpdateManyProjectArgs } from "./args/UpdateManyProjectArgs";
import { Project } from "../../../models/Project";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class UpdateManyProjectResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProjectArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).project.updateMany(args);
  }
}
