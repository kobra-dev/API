import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MLModelCountAggregate } from "../outputs/MLModelCountAggregate";
import { MLModelMaxAggregate } from "../outputs/MLModelMaxAggregate";
import { MLModelMinAggregate } from "../outputs/MLModelMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateMLModel {
  @TypeGraphQL.Field(_type => MLModelCountAggregate, {
    nullable: true
  })
  _count!: MLModelCountAggregate | null;

  @TypeGraphQL.Field(_type => MLModelMinAggregate, {
    nullable: true
  })
  _min!: MLModelMinAggregate | null;

  @TypeGraphQL.Field(_type => MLModelMaxAggregate, {
    nullable: true
  })
  _max!: MLModelMaxAggregate | null;
}
