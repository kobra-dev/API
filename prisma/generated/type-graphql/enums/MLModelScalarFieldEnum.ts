import * as TypeGraphQL from "type-graphql";

export enum MLModelScalarFieldEnum {
  id = "id",
  modelJson = "modelJson",
  modelParams = "modelParams",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(MLModelScalarFieldEnum, {
  name: "MLModelScalarFieldEnum",
  description: undefined,
});
