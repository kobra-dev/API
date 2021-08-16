import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectRelationFilter } from "../inputs/ProjectRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelWhereInput {
  @TypeGraphQL.Field(_type => [MLModelWhereInput], {
    nullable: true
  })
  AND?: MLModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereInput], {
    nullable: true
  })
  OR?: MLModelWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereInput], {
    nullable: true
  })
  NOT?: MLModelWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => ProjectRelationFilter, {
    nullable: true
  })
  project?: ProjectRelationFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  projectId?: StringFilter | undefined;
}
