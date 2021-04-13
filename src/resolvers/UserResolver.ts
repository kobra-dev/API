import { PrismaClient } from "@prisma/client";
import { Arg, Args, ArgsType, Ctx, Field, Maybe, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { User } from "../../prisma/generated/type-graphql";
import { Context } from "../app";
import { NotAuthorizedError } from "../errors";
import { removeNullKVPs } from "./ProjectResolver";

@ArgsType()
class EditProfileInput {
    @Field({ nullable: true })
    bio?: string;

    @Field({ nullable: true })
    url?: string
}

@ArgsType()
class UserInput {
    @Field({ nullable: true })
    id?: string;

    @Field({ nullable: true })
    name?: string;
}

@Service()
@Resolver(User)
export default class UserResolver {
    @Inject("PRISMA")
    p: PrismaClient;

    @Query(returns => User, { nullable: true })
    async user(@Args() userData: UserInput, @Ctx() context: Context) {
        if(!userData.id && !userData.name) throw new Error("Must specify id or name to get user");

        // TODO: security? actually not sure if it needs it
        return await this.p.user.findFirst({
            where: {
                ...(userData.name && {
                    name: {
                        equals: userData.name,
                        mode: "insensitive"
                    }
                }),
                id: userData.id
            }
        })
    }

    @Query(returns => Boolean)
    async isUsernameAvailable(@Arg("name") name: string) {
        return name.trim().length > 0 && (await this.p.user.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive"
                }
            }
        })) === null;
    }

    @Query(returns => String, { nullable: true })
    async getUsername(@Arg("id") id: string) {
        throw new Error("OBSOLETE: use user(id: $id) { name } instead");
    }

    @Mutation(returns => User)
    async setUsername(@Arg("name") name: string, @Ctx() context: Context) {
        if (!context.user) throw new NotAuthorizedError("Must include ID token to set username");
        if (name.trim().length < 0) throw new Error("Username must be at least 1 character");
        const existingUser = await this.p.user.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: "insensitive"
                }
            }
        });
        if (existingUser && existingUser.id !== context.user.uid) {
            throw new NotAuthorizedError("Username is taken");
        }

        return await this.p.user.upsert({
            where: {
                id: context.user.uid
            },
            create: {
                id: context.user.uid,
                name
            },
            update: {
                name
            }
        });
    }

    @Mutation(returns => User)
    async editProfile(@Args() editProfileData: EditProfileInput, @Ctx() context: Context) {
        if (!context.user) throw new NotAuthorizedError("Must include ID token to set bio");
        return await this.p.user.update({
            where: {
                id: context.user.uid
            },
            data: removeNullKVPs(editProfileData)
        });
    }
}