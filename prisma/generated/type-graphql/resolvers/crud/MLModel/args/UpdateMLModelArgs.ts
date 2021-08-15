import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelUpdateInput } from "../../../inputs/MLModelUpdateInput";
import { MLModelWhereUniqueInput } from "../../../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelUpdateInput, {
    nullable: false
  })
  data!: MLModelUpdateInput;

  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: false
  })
  where!: MLModelWhereUniqueInput;
}
