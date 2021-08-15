import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MLModelOrderByInput } from "../../../inputs/MLModelOrderByInput";
import { MLModelWhereInput } from "../../../inputs/MLModelWhereInput";
import { MLModelWhereUniqueInput } from "../../../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateMLModelArgs {
  @TypeGraphQL.Field(_type => MLModelWhereInput, {
    nullable: true
  })
  where?: MLModelWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MLModelOrderByInput], {
    nullable: true
  })
  orderBy?: MLModelOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => MLModelWhereUniqueInput, {
    nullable: true
  })
  cursor?: MLModelWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
