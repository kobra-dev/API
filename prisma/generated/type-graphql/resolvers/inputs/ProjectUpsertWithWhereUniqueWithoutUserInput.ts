import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutUserInput } from "../inputs/ProjectCreateWithoutUserInput";
import { ProjectUpdateWithoutUserInput } from "../inputs/ProjectUpdateWithoutUserInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutUserInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutUserInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutUserInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutUserInput;
}
