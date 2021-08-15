import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutModelsInput } from "../inputs/ProjectCreateOrConnectWithoutModelsInput";
import { ProjectCreateWithoutModelsInput } from "../inputs/ProjectCreateWithoutModelsInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutModelsInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutModelsInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutModelsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutModelsInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutModelsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
