import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutChildrenInput } from "../inputs/ProjectCreateWithoutChildrenInput";
import { ProjectUpdateWithoutChildrenInput } from "../inputs/ProjectUpdateWithoutChildrenInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutChildrenInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutChildrenInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutChildrenInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutChildrenInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutChildrenInput;
}
