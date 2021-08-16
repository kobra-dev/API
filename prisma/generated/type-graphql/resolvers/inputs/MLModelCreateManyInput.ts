import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modelJson!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelParams?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;
}
