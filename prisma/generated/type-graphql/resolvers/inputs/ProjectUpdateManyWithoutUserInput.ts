import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutUserInput } from "../inputs/ProjectCreateOrConnectWithoutUserInput";
import { ProjectCreateWithoutUserInput } from "../inputs/ProjectCreateWithoutUserInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutUserInput } from "../inputs/ProjectUpdateManyWithWhereWithoutUserInput";
import { ProjectUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutUserInput";
import { ProjectUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutUserInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutUserInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutUserInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
