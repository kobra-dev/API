import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutModelsInput } from "../inputs/ProjectCreateOrConnectWithoutModelsInput";
import { ProjectCreateWithoutModelsInput } from "../inputs/ProjectCreateWithoutModelsInput";
import { ProjectUpdateWithoutModelsInput } from "../inputs/ProjectUpdateWithoutModelsInput";
import { ProjectUpsertWithoutModelsInput } from "../inputs/ProjectUpsertWithoutModelsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutModelsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutModelsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutModelsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutModelsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutModelsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutModelsInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutModelsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutModelsInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutModelsInput | undefined;
}
