import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCreateNestedManyWithoutProjectInput } from "../inputs/MLModelCreateNestedManyWithoutProjectInput";
import { ProjectCreateNestedManyWithoutParentInput } from "../inputs/ProjectCreateNestedManyWithoutParentInput";
import { ProjectCreateNestedOneWithoutChildrenInput } from "../inputs/ProjectCreateNestedOneWithoutChildrenInput";
import { UserCreateNestedOneWithoutProjectsInput } from "../inputs/UserCreateNestedOneWithoutProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isPublic!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  summary?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  projectJson?: string | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutProjectsInput, {
    nullable: false
  })
  user!: UserCreateNestedOneWithoutProjectsInput;

  @TypeGraphQL.Field(_type => MLModelCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  models?: MLModelCreateNestedManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutChildrenInput, {
    nullable: true
  })
  parent?: ProjectCreateNestedOneWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutParentInput, {
    nullable: true
  })
  children?: ProjectCreateNestedManyWithoutParentInput | undefined;
}
