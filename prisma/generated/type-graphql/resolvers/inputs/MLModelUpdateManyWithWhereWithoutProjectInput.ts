import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelScalarWhereInput } from "../inputs/MLModelScalarWhereInput";
import { MLModelUpdateManyMutationInput } from "../inputs/MLModelUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelUpdateManyWithWhereWithoutProjectInput {
  @TypeGraphQL.Field(_type => MLModelScalarWhereInput, {
    nullable: false
  })
  where!: MLModelScalarWhereInput;

  @TypeGraphQL.Field(_type => MLModelUpdateManyMutationInput, {
    nullable: false
  })
  data!: MLModelUpdateManyMutationInput;
}
