import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelOrderByInput } from "../../../inputs/MLModelOrderByInput";
import { MLModelScalarWhereWithAggregatesInput } from "../../../inputs/MLModelScalarWhereWithAggregatesInput";
import { MLModelWhereInput } from "../../../inputs/MLModelWhereInput";
import { MLModelScalarFieldEnum } from "../../../../enums/MLModelScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  where?: MLModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MLModelOrderByInput], {
    nullable: true
  })
  orderBy?: MLModelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "modelJSON" | "modelParams" | "projectID">;

  @TypeGraphQL.Field(_type => MLModelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MLModelScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
