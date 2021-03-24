import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutChildrenInput } from "../inputs/ProjectCreateOrConnectWithoutChildrenInput";
import { ProjectCreateWithoutChildrenInput } from "../inputs/ProjectCreateWithoutChildrenInput";
import { ProjectUpdateWithoutChildrenInput } from "../inputs/ProjectUpdateWithoutChildrenInput";
import { ProjectUpsertWithoutChildrenInput } from "../inputs/ProjectUpsertWithoutChildrenInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneWithoutChildrenInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutChildrenInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutChildrenInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutChildrenInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutChildrenInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutChildrenInput | undefined;
}
