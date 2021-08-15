import * as TypeGraphQL from "type-graphql";
import { MLModel } from "../../../models/MLModel";
import { Project } from "../../../models/Project";
import { User } from "../../../models/User";
import { ProjectChildrenArgs } from "./args/ProjectChildrenArgs";
import { ProjectModelsArgs } from "./args/ProjectModelsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).user({});
  }

  @TypeGraphQL.FieldResolver(_type => [MLModel], {
    nullable: false
  })
  async models(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectModelsArgs): Promise<MLModel[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).models(args);
  }

  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: true
  })
  async parent(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any): Promise<Project | null> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).parent({});
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async children(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectChildrenArgs): Promise<Project[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).children(args);
  }
}
