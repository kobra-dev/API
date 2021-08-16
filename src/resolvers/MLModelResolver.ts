import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { Arg, Args, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { MLModel } from "../../prisma/generated/type-graphql";
import { Context } from "../app";
import { NotAuthorizedError, NotFoundError } from "../errors";
import { EditModelInput, NewModelInput } from "../ModelTypes";
import ProjectResolver, { removeNullKVPs } from "./ProjectResolver";

@Service()
@Resolver(MLModel)
export default class MLModelResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    @Query(returns => MLModel, { nullable: true })
    async model(@Arg("id") id: string, @Ctx() context: Context) { 
        const m = await this.p.mLModel.findFirst({
            where: {
                id,
                project: {
                    OR: {
                        userId: context.user?.uid,
                        isPublic: true
                    }
                }
            }
        });

        if(!m) {
            throw new NotFoundError(`Model with ID ${id} not found`);
        }

        return m;
    }

    verifyUserCanModifyProject = ProjectResolver.prototype.verifyUserCanModifyProject;
    async verifyUserCanModifyModel(id: string, context: Context) {
        if (!context.user) throw new NotAuthorizedError("Must include ID token to modify model");
        const project = await this.p.mLModel.findFirst({
            where: {
                id
            },
            include: {
                project: {
                    select: {
                        userId: true,
                        isPublic: true
                    }
                }
            }
        });

        const canEdit = project?.project.userId === context.user.uid;
        if(!project || (!canEdit && !project.project.isPublic)) {
            throw new NotFoundError(`Model with ID ${id} not found`);
        }
        else if(!canEdit) {
            throw new NotAuthorizedError("Project user does not match ID token user");
        }
    }

    @Mutation(returns => MLModel)
    async addModel(@Args() newModelData: NewModelInput, @Ctx() context: Context) {
        await this.verifyUserCanModifyProject(newModelData.projectId, context);

        return await this.p.mLModel.create({
            data: {
                id: nanoid(),
                ...newModelData
            }
        });
    }

    @Mutation(returns => MLModel)
    async editModel(@Arg("id") id: string, @Args() editModelData: EditModelInput, @Ctx() context: Context) {
        await this.verifyUserCanModifyModel(id, context);
        
        return this.p.mLModel.update({
            where: {
                id
            },
            data: removeNullKVPs(editModelData)
        });
    }

    @Mutation(returns => MLModel)
    async removeModel(@Arg("id") id: string, @Ctx() context: Context) {
        await this.verifyUserCanModifyModel(id, context);

        return this.p.mLModel.delete({
            where: {
                id
            }
        });
    }
}