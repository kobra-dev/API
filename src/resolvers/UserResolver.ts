import { PrismaClient } from "@prisma/client";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Inject, Service } from "typedi";
import { User } from "../../prisma/generated/type-graphql";
import { Context } from "../app";
import { NotAuthorizedError } from "../errors";

@Service()
@Resolver(User)
export default class UserResolver {
    @Inject("PRISMA")
    p: PrismaClient;

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
        return (await this.p.user.findUnique({
            where: {
                id
            },
            select: {
                name: true
            }
        }))?.name;
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
}