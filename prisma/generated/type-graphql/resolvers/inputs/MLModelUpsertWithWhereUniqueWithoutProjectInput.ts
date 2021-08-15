import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCreateWithoutProjectInput } from "../inputs/MLModelCreateWithoutProjectInput";
import { MLModelUpdateWithoutProjectInput } from "../inputs/MLModelUpdateWithoutProjectInput";
import { MLModelWhereUniqueInput } from "../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelUpsertWithWhereUniqueWithoutProjectInput {
  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: false
  })
  where!: MLModelWhereUniqueInput;

  @TypeGraphQL.Field(_type => MLModelUpdateWithoutProjectInput, {
    nullable: false
  })
  update!: MLModelUpdateWithoutProjectInput;

  @TypeGraphQL.Field(_type => MLModelCreateWithoutProjectInput, {
    nullable: false
  })
  create!: MLModelCreateWithoutProjectInput;
}
