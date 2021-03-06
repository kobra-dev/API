import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateProjectArgs } from "./args/AggregateProjectArgs";
import { CreateProjectArgs } from "./args/CreateProjectArgs";
import { DeleteManyProjectArgs } from "./args/DeleteManyProjectArgs";
import { DeleteProjectArgs } from "./args/DeleteProjectArgs";
import { FindFirstProjectArgs } from "./args/FindFirstProjectArgs";
import { FindManyProjectArgs } from "./args/FindManyProjectArgs";
import { FindUniqueProjectArgs } from "./args/FindUniqueProjectArgs";
import { UpdateManyProjectArgs } from "./args/UpdateManyProjectArgs";
import { UpdateProjectArgs } from "./args/UpdateProjectArgs";
import { UpsertProjectArgs } from "./args/UpsertProjectArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Project } from "../../../models/Project";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateProject } from "../../outputs/AggregateProject";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectCrudResolver {
  @TypeGraphQL.Query(_returns => Project, {
    nullable: true
  })
  async project(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Project, {
    nullable: true
  })
  async findFirstProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyProjectArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).project.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: false
  })
  async createProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateProjectArgs): Promise<Project> {
    return getPrismaFromContext(ctx).project.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: true
  })
  async deleteProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: true
  })
  async updateProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateProjectArgs): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyProjectArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).project.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyProjectArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).project.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Project, {
    nullable: false
  })
  async upsertProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertProjectArgs): Promise<Project> {
    return getPrismaFromContext(ctx).project.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateProject, {
    nullable: false
  })
  async aggregateProject(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProjectArgs): Promise<AggregateProject> {
    return getPrismaFromContext(ctx).project.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
