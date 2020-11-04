import { AuthChecker } from "type-graphql";

export const auth0AuthChecker: AuthChecker<any> = (
    { root, args, context, info },
    roles
) => {
    // TODO
    const token = context;
    console.log("Root");
    console.log(root);
    console.log("Args");
    console.log(args);
    console.log("Context");
    console.log(context);
    console.log("Info");
    console.log(info);
    console.log("Roles");
    console.log(roles);
    return true;
}