import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserUpdateWithoutProjectsInput } from "../inputs/UserUpdateWithoutProjectsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: UserCreateWithoutProjectsInput;
}
