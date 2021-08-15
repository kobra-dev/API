import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelCreateInput } from "../../../inputs/MLModelCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelCreateInput, {
    nullable: false
  })
  data!: MLModelCreateInput;
}
