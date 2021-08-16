import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MLModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MLModelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MLModelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MLModelScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modelJson?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  modelParams?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  projectId?: StringWithAggregatesFilter | undefined;
}
