import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutChildrenInput } from "../inputs/ProjectCreateOrConnectWithoutChildrenInput";
import { ProjectCreateWithoutChildrenInput } from "../inputs/ProjectCreateWithoutChildrenInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateNestedOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
