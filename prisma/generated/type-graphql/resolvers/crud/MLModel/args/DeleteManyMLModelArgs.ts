import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelWhereInput } from "../../../inputs/MLModelWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  where?: MLModelWhereInput | undefined;
}
