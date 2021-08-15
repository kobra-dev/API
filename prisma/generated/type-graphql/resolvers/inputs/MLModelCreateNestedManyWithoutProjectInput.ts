import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCreateManyProjectInputEnvelope } from "../inputs/MLModelCreateManyProjectInputEnvelope";
import { MLModelCreateOrConnectWithoutProjectInput } from "../inputs/MLModelCreateOrConnectWithoutProjectInput";
import { MLModelCreateWithoutProjectInput } from "../inputs/MLModelCreateWithoutProjectInput";
import { MLModelWhereUniqueInput } from "../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelCreateNestedManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [MLModelCreateWithoutProjectInput], {
    nullable: true
  })
  create?: MLModelCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: MLModelCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => MLModelCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: MLModelCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereUniqueInput], {
    nullable: true
  })
  connect?: MLModelWhereUniqueInput[] | undefined;
}
