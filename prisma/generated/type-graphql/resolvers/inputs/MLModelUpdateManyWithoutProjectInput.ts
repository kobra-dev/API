import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCreateManyProjectInputEnvelope } from "../inputs/MLModelCreateManyProjectInputEnvelope";
import { MLModelCreateOrConnectWithoutProjectInput } from "../inputs/MLModelCreateOrConnectWithoutProjectInput";
import { MLModelCreateWithoutProjectInput } from "../inputs/MLModelCreateWithoutProjectInput";
import { MLModelScalarWhereInput } from "../inputs/MLModelScalarWhereInput";
import { MLModelUpdateManyWithWhereWithoutProjectInput } from "../inputs/MLModelUpdateManyWithWhereWithoutProjectInput";
import { MLModelUpdateWithWhereUniqueWithoutProjectInput } from "../inputs/MLModelUpdateWithWhereUniqueWithoutProjectInput";
import { MLModelUpsertWithWhereUniqueWithoutProjectInput } from "../inputs/MLModelUpsertWithWhereUniqueWithoutProjectInput";
import { MLModelWhereUniqueInput } from "../inputs/MLModelWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class MLModelUpdateManyWithoutProjectInput {
  @TypeGraphQL.Field(_type => [MLModelCreateWithoutProjectInput], {
    nullable: true
  })
  create?: MLModelCreateWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelCreateOrConnectWithoutProjectInput], {
    nullable: true
  })
  connectOrCreate?: MLModelCreateOrConnectWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelUpsertWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  upsert?: MLModelUpsertWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => MLModelCreateManyProjectInputEnvelope, {
    nullable: true
  })
  createMany?: MLModelCreateManyProjectInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereUniqueInput], {
    nullable: true
  })
  connect?: MLModelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereUniqueInput], {
    nullable: true
  })
  set?: MLModelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MLModelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelWhereUniqueInput], {
    nullable: true
  })
  delete?: MLModelWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelUpdateWithWhereUniqueWithoutProjectInput], {
    nullable: true
  })
  update?: MLModelUpdateWithWhereUniqueWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelUpdateManyWithWhereWithoutProjectInput], {
    nullable: true
  })
  updateMany?: MLModelUpdateManyWithWhereWithoutProjectInput[] | undefined;

  @TypeGraphQL.Field(_type => [MLModelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MLModelScalarWhereInput[] | undefined;
}
