import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateMLModelArgs } from "./args/AggregateMLModelArgs";
import { MLModel } from "../../../models/MLModel";
import { AggregateMLModel } from "../../outputs/AggregateMLModel";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MLModel)
export class AggregateMLModelResolver {
  @TypeGraphQL.Query(_returns => AggregateMLModel, {
    nullable: false
  })
  async aggregateMLModel(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateMLModelArgs): Promise<AggregateMLModel> {
    return getPrismaFromContext(ctx).mLModel.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
