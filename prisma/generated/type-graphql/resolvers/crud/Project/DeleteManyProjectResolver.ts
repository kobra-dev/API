import * as TypeGraphQL from "type-graphql";
import { DeleteManyProjectArgs } from "./args/DeleteManyProjectArgs";
import { Project } from "../../../models/Project";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class DeleteManyProjectResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProjectArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).project.deleteMany(args);
  }
}
