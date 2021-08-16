import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Project } from "../models/Project";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class MLModel {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  modelJson!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  modelParams?: string | null;

  project?: Project;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  projectId!: string;
}
