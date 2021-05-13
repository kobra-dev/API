import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyParentInput } from "../inputs/ProjectCreateManyParentInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateManyParentInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyParentInput], {
    nullable: false
  })
  data!: ProjectCreateManyParentInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
