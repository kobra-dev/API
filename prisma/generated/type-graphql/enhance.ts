import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Project: crudResolvers.ProjectCrudResolver,
  MLModel: crudResolvers.MLModelCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const relationResolversMap = {
  Project: relationResolvers.ProjectRelationsResolver,
  MLModel: relationResolvers.MLModelRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const actionResolversMap = {
  Project: {
    project: actionResolvers.FindUniqueProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    projects: actionResolvers.FindManyProjectResolver,
    createProject: actionResolvers.CreateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    deleteProject: actionResolvers.DeleteProjectResolver,
    updateProject: actionResolvers.UpdateProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    upsertProject: actionResolvers.UpsertProjectResolver,
    aggregateProject: actionResolvers.AggregateProjectResolver,
    groupByProject: actionResolvers.GroupByProjectResolver
  },
  MLModel: {
    mLModel: actionResolvers.FindUniqueMLModelResolver,
    findFirstMLModel: actionResolvers.FindFirstMLModelResolver,
    mLModels: actionResolvers.FindManyMLModelResolver,
    createMLModel: actionResolvers.CreateMLModelResolver,
    createManyMLModel: actionResolvers.CreateManyMLModelResolver,
    deleteMLModel: actionResolvers.DeleteMLModelResolver,
    updateMLModel: actionResolvers.UpdateMLModelResolver,
    deleteManyMLModel: actionResolvers.DeleteManyMLModelResolver,
    updateManyMLModel: actionResolvers.UpdateManyMLModelResolver,
    upsertMLModel: actionResolvers.UpsertMLModelResolver,
    aggregateMLModel: actionResolvers.AggregateMLModelResolver,
    groupByMLModel: actionResolvers.GroupByMLModelResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  }
};
const resolversInfo = {
  Project: ["project", "findFirstProject", "projects", "createProject", "createManyProject", "deleteProject", "updateProject", "deleteManyProject", "updateManyProject", "upsertProject", "aggregateProject", "groupByProject"],
  MLModel: ["mLModel", "findFirstMLModel", "mLModels", "createMLModel", "createManyMLModel", "deleteMLModel", "updateMLModel", "deleteManyMLModel", "updateManyMLModel", "upsertMLModel", "aggregateMLModel", "groupByMLModel"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const relationResolversInfo = {
  Project: ["user", "models", "parent", "children"],
  MLModel: ["project"],
  User: ["projects"]
};
const modelsInfo = {
  Project: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  MLModel: ["id", "modelJson", "modelParams", "projectId"],
  User: ["id", "name", "bio", "url", "emailUpdates", "datasets"]
};
const inputsInfo = {
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "user", "userId", "name", "isPublic", "summary", "description", "projectJson", "models", "parentId", "parent", "children"],
  ProjectOrderByInput: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  ProjectWhereUniqueInput: ["id"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  MLModelWhereInput: ["AND", "OR", "NOT", "id", "modelJson", "modelParams", "project", "projectId"],
  MLModelOrderByInput: ["id", "modelJson", "modelParams", "projectId"],
  MLModelWhereUniqueInput: ["id"],
  MLModelScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "modelJson", "modelParams", "projectId"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "bio", "url", "emailUpdates", "projects", "datasets"],
  UserOrderByInput: ["id", "name", "bio", "url", "emailUpdates", "datasets"],
  UserWhereUniqueInput: ["id", "name"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "bio", "url", "emailUpdates", "datasets"],
  ProjectCreateInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "models", "parent", "children"],
  ProjectUpdateInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "models", "parent", "children"],
  ProjectCreateManyInput: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  ProjectUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson"],
  MLModelCreateInput: ["id", "modelJson", "modelParams", "project"],
  MLModelUpdateInput: ["id", "modelJson", "modelParams", "project"],
  MLModelCreateManyInput: ["id", "modelJson", "modelParams", "projectId"],
  MLModelUpdateManyMutationInput: ["id", "modelJson", "modelParams"],
  UserCreateInput: ["id", "name", "bio", "url", "emailUpdates", "datasets", "projects"],
  UserUpdateInput: ["id", "name", "bio", "url", "emailUpdates", "datasets", "projects"],
  UserCreateManyInput: ["id", "name", "bio", "url", "emailUpdates", "datasets"],
  UserUpdateManyMutationInput: ["id", "name", "bio", "url", "emailUpdates", "datasets"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  BoolFilter: ["equals", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  MLModelListRelationFilter: ["every", "some", "none"],
  ProjectRelationFilter: ["is", "isNot"],
  ProjectListRelationFilter: ["every", "some", "none"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableFilter: ["equals", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateNestedOneWithoutProjectsInput: ["create", "connectOrCreate", "connect"],
  MLModelCreateNestedManyWithoutProjectInput: ["create", "connectOrCreate", "createMany", "connect"],
  ProjectCreateNestedOneWithoutChildrenInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedManyWithoutParentInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutProjectsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MLModelUpdateManyWithoutProjectInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectUpdateOneWithoutChildrenInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  ProjectUpdateManyWithoutParentInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  ProjectCreateNestedOneWithoutModelsInput: ["create", "connectOrCreate", "connect"],
  ProjectUpdateOneRequiredWithoutModelsInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreatedatasetsInput: ["set"],
  ProjectCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableBoolFieldUpdateOperationsInput: ["set"],
  UserUpdatedatasetsInput: ["set", "push"],
  ProjectUpdateManyWithoutUserInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateManydatasetsInput: ["set"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableFilter: ["equals", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  UserCreateWithoutProjectsInput: ["id", "name", "bio", "url", "emailUpdates", "datasets"],
  UserCreateOrConnectWithoutProjectsInput: ["where", "create"],
  MLModelCreateWithoutProjectInput: ["id", "modelJson", "modelParams"],
  MLModelCreateOrConnectWithoutProjectInput: ["where", "create"],
  MLModelCreateManyProjectInputEnvelope: ["data", "skipDuplicates"],
  ProjectCreateWithoutChildrenInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "models", "parent"],
  ProjectCreateOrConnectWithoutChildrenInput: ["where", "create"],
  ProjectCreateWithoutParentInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "models", "children"],
  ProjectCreateOrConnectWithoutParentInput: ["where", "create"],
  ProjectCreateManyParentInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutProjectsInput: ["update", "create"],
  UserUpdateWithoutProjectsInput: ["id", "name", "bio", "url", "emailUpdates", "datasets"],
  MLModelUpsertWithWhereUniqueWithoutProjectInput: ["where", "update", "create"],
  MLModelUpdateWithWhereUniqueWithoutProjectInput: ["where", "data"],
  MLModelUpdateManyWithWhereWithoutProjectInput: ["where", "data"],
  MLModelScalarWhereInput: ["AND", "OR", "NOT", "id", "modelJson", "modelParams", "projectId"],
  ProjectUpsertWithoutChildrenInput: ["update", "create"],
  ProjectUpdateWithoutChildrenInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "models", "parent"],
  ProjectUpsertWithWhereUniqueWithoutParentInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutParentInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutParentInput: ["where", "data"],
  ProjectScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  ProjectCreateWithoutModelsInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "parent", "children"],
  ProjectCreateOrConnectWithoutModelsInput: ["where", "create"],
  ProjectUpsertWithoutModelsInput: ["update", "create"],
  ProjectUpdateWithoutModelsInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "parent", "children"],
  ProjectCreateWithoutUserInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "models", "parent", "children"],
  ProjectCreateOrConnectWithoutUserInput: ["where", "create"],
  ProjectCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ProjectUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ProjectUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ProjectUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MLModelCreateManyProjectInput: ["id", "modelJson", "modelParams"],
  ProjectCreateManyParentInput: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson"],
  MLModelUpdateWithoutProjectInput: ["id", "modelJson", "modelParams"],
  ProjectUpdateWithoutParentInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "user", "models", "children"],
  ProjectCreateManyUserInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  ProjectUpdateWithoutUserInput: ["id", "createdAt", "updatedAt", "name", "isPublic", "summary", "description", "projectJson", "models", "parent", "children"]
};
const outputsInfo = {
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId", "_count", "_min", "_max"],
  AggregateMLModel: ["_count", "_min", "_max"],
  MLModelGroupBy: ["id", "modelJson", "modelParams", "projectId", "_count", "_min", "_max"],
  AggregateUser: ["_count", "_min", "_max"],
  UserGroupBy: ["id", "name", "bio", "url", "emailUpdates", "datasets", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProjectCountAggregate: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId", "_all"],
  ProjectMinAggregate: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  ProjectMaxAggregate: ["id", "createdAt", "updatedAt", "userId", "name", "isPublic", "summary", "description", "projectJson", "parentId"],
  MLModelCountAggregate: ["id", "modelJson", "modelParams", "projectId", "_all"],
  MLModelMinAggregate: ["id", "modelJson", "modelParams", "projectId"],
  MLModelMaxAggregate: ["id", "modelJson", "modelParams", "projectId"],
  UserCountAggregate: ["id", "name", "bio", "url", "emailUpdates", "datasets", "_all"],
  UserMinAggregate: ["id", "name", "bio", "url", "emailUpdates"],
  UserMaxAggregate: ["id", "name", "bio", "url", "emailUpdates"]
};
const argsInfo = {
  FindUniqueProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProjectArgs: ["data"],
  CreateManyProjectArgs: ["data", "skipDuplicates"],
  DeleteProjectArgs: ["where"],
  UpdateProjectArgs: ["data", "where"],
  DeleteManyProjectArgs: ["where"],
  UpdateManyProjectArgs: ["data", "where"],
  UpsertProjectArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueMLModelArgs: ["where"],
  FindFirstMLModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMLModelArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateMLModelArgs: ["data"],
  CreateManyMLModelArgs: ["data", "skipDuplicates"],
  DeleteMLModelArgs: ["where"],
  UpdateMLModelArgs: ["data", "where"],
  DeleteManyMLModelArgs: ["where"],
  UpdateManyMLModelArgs: ["data", "where"],
  UpsertMLModelArgs: ["where", "create", "update"],
  AggregateMLModelArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByMLModelArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







