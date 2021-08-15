import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelCreateInput } from "../../../inputs/MLModelCreateInput";
import { MLModelUpdateInput } from "../../../inputs/MLModelUpdateInput";
import { MLModelWhereUniqueInput } from "../../../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: false
  })
  where!: MLModelWhereUniqueInput;

  @TypeGraphQL.Field(_type => MLModelCreateInput, {
    nullable: false
  })
  create!: MLModelCreateInput;

  @TypeGraphQL.Field(_type => MLModelUpdateInput, {
    nullable: false
  })
  update!: MLModelUpdateInput;
}
