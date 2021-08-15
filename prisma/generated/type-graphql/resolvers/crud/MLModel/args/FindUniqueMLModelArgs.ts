import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelWhereUniqueInput } from "../../../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: false
  })
  where!: MLModelWhereUniqueInput;
}
