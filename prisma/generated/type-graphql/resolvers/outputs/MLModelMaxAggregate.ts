import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MLModelMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelJson!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelParams!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectId!: string | null;
}
