import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectCreateInput } from "../../../inputs/ProjectCreateInput";

@TypeGraphQL.ArgsType()
export class CreateProjectArgs {
  @TypeGraphQL.Field(_type => ProjectCreateInput, {
    nullable: false
  })
  data!: ProjectCreateInput;
}
