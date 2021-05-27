import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyUserInputEnvelope } from "../inputs/ProjectCreateManyUserInputEnvelope";
import { ProjectCreateOrConnectWithoutUserInput } from "../inputs/ProjectCreateOrConnectWithoutUserInput";
import { ProjectCreateWithoutUserInput } from "../inputs/ProjectCreateWithoutUserInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
