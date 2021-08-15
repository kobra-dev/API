import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectOrderByInput } from "../../../inputs/ProjectOrderByInput";
import { ProjectScalarWhereWithAggregatesInput } from "../../../inputs/ProjectScalarWhereWithAggregatesInput";
import { ProjectWhereInput } from "../../../inputs/ProjectWhereInput";
import { ProjectScalarFieldEnum } from "../../../../enums/ProjectScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByProjectArgs {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProjectOrderByInput], {
    nullable: true
  })
  orderBy?: ProjectOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "userId" | "name" | "isPublic" | "summary" | "description" | "projectJson" | "parentId">;

  @TypeGraphQL.Field(_type => ProjectScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ProjectScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
