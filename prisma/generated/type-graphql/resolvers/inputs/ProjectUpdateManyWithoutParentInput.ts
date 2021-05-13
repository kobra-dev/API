import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyParentInputEnvelope } from "../inputs/ProjectCreateManyParentInputEnvelope";
import { ProjectCreateOrConnectWithoutParentInput } from "../inputs/ProjectCreateOrConnectWithoutParentInput";
import { ProjectCreateWithoutParentInput } from "../inputs/ProjectCreateWithoutParentInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutParentInput } from "../inputs/ProjectUpdateManyWithWhereWithoutParentInput";
import { ProjectUpdateWithWhereUniqueWithoutParentInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutParentInput";
import { ProjectUpsertWithWhereUniqueWithoutParentInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutParentInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateManyWithoutParentInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutParentInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutParentInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyParentInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyParentInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutParentInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutParentInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutParentInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
