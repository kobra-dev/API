import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyUserInput } from "../inputs/ProjectCreateManyUserInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateManyUserInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyUserInput], {
    nullable: false
  })
  data!: ProjectCreateManyUserInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
