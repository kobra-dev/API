import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCreateManyProjectInput } from "../inputs/MLModelCreateManyProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelCreateManyProjectInputEnvelope {
  @TypeGraphQL.Field(_type => [MLModelCreateManyProjectInput], {
    nullable: false
  })
  data!: MLModelCreateManyProjectInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
