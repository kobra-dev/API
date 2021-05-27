import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyParentInputEnvelope } from "../inputs/ProjectCreateManyParentInputEnvelope";
import { ProjectCreateOrConnectWithoutParentInput } from "../inputs/ProjectCreateOrConnectWithoutParentInput";
import { ProjectCreateWithoutParentInput } from "../inputs/ProjectCreateWithoutParentInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutParentInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;
}
