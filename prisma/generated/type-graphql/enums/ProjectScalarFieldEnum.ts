import * as TypeGraphQL from "type-graphql";

export enum ProjectScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
  name = "name",
  isPublic = "isPublic",
  summary = "summary",
  description = "description",
  projectJson = "projectJson",
  modelsDb = "modelsDb",
  parentId = "parentId"
}
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
  name: "ProjectScalarFieldEnum",
  description: undefined,
});
