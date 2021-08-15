import * as TypeGraphQL from "type-graphql";

export enum MLModelScalarFieldEnum {
  id = "id",
  modelJSON = "modelJSON",
  modelParams = "modelParams",
  projectID = "projectID"
}
TypeGraphQL.registerEnumType(MLModelScalarFieldEnum, {
  name: "MLModelScalarFieldEnum",
  description: undefined,
});
