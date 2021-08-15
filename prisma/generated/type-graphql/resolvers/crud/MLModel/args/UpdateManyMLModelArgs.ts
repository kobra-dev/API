import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelUpdateManyMutationInput } from "../../../inputs/MLModelUpdateManyMutationInput";
import { MLModelWhereInput } from "../../../inputs/MLModelWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelUpdateManyMutationInput, {
    nullable: false
  })
  data!: MLModelUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  where?: MLModelWhereInput | undefined;
}
