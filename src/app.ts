//#region Imports

// GraphQL
// Prisma
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
// Misc
import dotenv from "dotenv";
// Auth
import FirebaseAdmin from "firebase-admin";
import fs from "fs";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import ProjectRelationsResolver from "./resolvers/ProjectRelationsResolver";
// Resolvers
import ProjectResolver from "./resolvers/ProjectResolver";
import UserRelationsResolver from "./resolvers/UserRelationsResolver";
import UserResolver from "./resolvers/UserResolver";

//#endregion

dotenv.config();

const prisma = new PrismaClient();

let firebaseConfig: string;

try {
  firebaseConfig = fs.readFileSync("./firebase-key.json", "utf-8");
} catch (err) {
  let c = process.env.FIREBASE_CONFIG;
  if (!c) throw err;
  firebaseConfig = c;
}

FirebaseAdmin.initializeApp({
  credential: FirebaseAdmin.credential.cert(JSON.parse(firebaseConfig)),
});

// Dependency injection
Container.set("PRISMA", prisma);

export interface Context {
  user: FirebaseAdmin.auth.DecodedIdToken | undefined;
  prisma: PrismaClient;
}

async function main() {
  const schema = await buildSchema({
    resolvers: [
      ProjectResolver,
      UserResolver,
      ProjectRelationsResolver,
      UserRelationsResolver,
    ],
    container: Container,
  });

  const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
    context: async ({ req }): Promise<Context> => {
      const token = req.headers.authorization;
      let user: FirebaseAdmin.auth.DecodedIdToken | undefined = undefined;
      if (token !== undefined) {
        try {
          user = await FirebaseAdmin.auth().verifyIdToken(token);
        } catch (error) {
          throw new Error("Invalid auth token");
        }
      }
      return {
        user,
        prisma,
      };
    },
  });

  // Might need to change the port later, 4000 interferes with other things on my computer
  const { url } = await server.listen(4000);
  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
