import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateManydatasetsInput } from "../inputs/UserCreateManydatasetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  url?: string | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  emailUpdates?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserCreateManydatasetsInput, {
    nullable: true
  })
  datasets?: UserCreateManydatasetsInput | undefined;
}
