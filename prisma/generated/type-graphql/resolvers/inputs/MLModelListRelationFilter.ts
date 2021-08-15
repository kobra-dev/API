import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelWhereInput } from "../inputs/MLModelWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelListRelationFilter {
  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  every?: MLModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  some?: MLModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  none?: MLModelWhereInput | undefined;
}
