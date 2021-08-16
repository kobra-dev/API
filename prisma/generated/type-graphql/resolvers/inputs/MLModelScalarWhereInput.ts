import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelScalarWhereInput {
  @TypeGraphQL.Field(_type => [MLModelScalarWhereInput], {
    nullable: true
  })
  AND?: MLModelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelScalarWhereInput], {
    nullable: true
  })
  OR?: MLModelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelScalarWhereInput], {
    nullable: true
  })
  NOT?: MLModelScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  modelJson?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  modelParams?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;
}
