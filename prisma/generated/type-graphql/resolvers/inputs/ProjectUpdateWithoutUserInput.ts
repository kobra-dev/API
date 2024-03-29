import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MLModelUpdateManyWithoutProjectInput } from "../inputs/MLModelUpdateManyWithoutProjectInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateManyWithoutParentInput } from "../inputs/ProjectUpdateManyWithoutParentInput";
import { ProjectUpdateOneWithoutChildrenInput } from "../inputs/ProjectUpdateOneWithoutChildrenInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => BoolFieldUpdateOperationsInput, {
    nullable: true
  })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  summary?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  projectJson?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MLModelUpdateManyWithoutProjectInput, {
    nullable: true
  })
  models?: MLModelUpdateManyWithoutProjectInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutChildrenInput, {
    nullable: true
  })
  parent?: ProjectUpdateOneWithoutChildrenInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutParentInput, {
    nullable: true
  })
  children?: ProjectUpdateManyWithoutParentInput | undefined;
}
