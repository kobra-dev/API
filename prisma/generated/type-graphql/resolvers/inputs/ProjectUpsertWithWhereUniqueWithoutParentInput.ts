import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutParentInput } from "../inputs/ProjectCreateWithoutParentInput";
import { ProjectUpdateWithoutParentInput } from "../inputs/ProjectUpdateWithoutParentInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutParentInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutParentInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutParentInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutParentInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutParentInput;
}
