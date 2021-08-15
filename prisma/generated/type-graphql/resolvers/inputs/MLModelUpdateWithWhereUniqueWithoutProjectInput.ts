import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelUpdateWithoutProjectInput } from "../inputs/MLModelUpdateWithoutProjectInput";
import { MLModelWhereUniqueInput } from "../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelUpdateWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: false
  })
  where!: MLModelWhereUniqueInput;

  @TypeGraphQL.Field(_type => MLModelUpdateWithoutProjectInput, {
    nullable: false
  })
  data!: MLModelUpdateWithoutProjectInput;
}
