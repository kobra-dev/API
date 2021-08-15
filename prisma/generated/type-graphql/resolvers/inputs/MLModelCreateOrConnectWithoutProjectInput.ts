import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCreateWithoutProjectInput } from "../inputs/MLModelCreateWithoutProjectInput";
import { MLModelWhereUniqueInput } from "../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelCreateOrConnectWithoutProjectInput {
  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: false
  })
  where!: MLModelWhereUniqueInput;

  @TypeGraphQL.Field(_type => MLModelCreateWithoutProjectInput, {
    nullable: false
  })
  create!: MLModelCreateWithoutProjectInput;
}
