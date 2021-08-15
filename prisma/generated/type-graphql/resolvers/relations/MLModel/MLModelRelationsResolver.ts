import * as TypeGraphQL from "type-graphql";
import { MLModel } from "../../../models/MLModel";
import { Project } from "../../../models/Project";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MLModel)
export class MLModelRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() mLModel: MLModel, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).mLModel.findUnique({
      where: {
        id: mLModel.id,
      },
    }).project({});
  }
}
