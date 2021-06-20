import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedManyWithoutUserInput } from "../inputs/ProjectCreateNestedManyWithoutUserInput";
import { UserCreatedatasetsInput } from "../inputs/UserCreatedatasetsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreatedatasetsInput, {
    nullable: true
  })
  datasets?: UserCreatedatasetsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutUserInput | undefined;
}
