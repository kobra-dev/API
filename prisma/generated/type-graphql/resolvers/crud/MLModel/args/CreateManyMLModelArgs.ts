import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelCreateManyInput } from "../../../inputs/MLModelCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyMLModelArgs {
  @TypeGraphQL.Field(_type => [MLModelCreateManyInput], {
    nullable: false
  })
  data!: MLModelCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
