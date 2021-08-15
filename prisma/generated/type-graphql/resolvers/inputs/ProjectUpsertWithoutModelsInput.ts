import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutModelsInput } from "../inputs/ProjectCreateWithoutModelsInput";
import { ProjectUpdateWithoutModelsInput } from "../inputs/ProjectUpdateWithoutModelsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutModelsInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutModelsInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutModelsInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutModelsInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutModelsInput;
}
