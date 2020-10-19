import { AuthChecker } from "type-graphql";

export const auth0AuthChecker: AuthChecker = (
    { root, args, context, info },
    roles
) => {
    // TODO
    return false;
}