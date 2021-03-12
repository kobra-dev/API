import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutProjectsInput } from "../inputs/UserCreateOrConnectWithoutProjectsInput";
import { UserCreateWithoutProjectsInput } from "../inputs/UserCreateWithoutProjectsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutProjectsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: UserCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
