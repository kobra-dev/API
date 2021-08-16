import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import FirebaseAdmin from "firebase-admin";
import fs from "fs";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
// We can use the generated one because in order to have access to a model you have to have access to its project, so we don't need additional authentication
import { MLModelRelationsResolver } from "../prisma/generated/type-graphql";
import MLModelResolver from "./resolvers/MLModelResolver";
import ProjectRelationsResolver from "./resolvers/ProjectRelationsResolver";
import ProjectResolver from "./resolvers/ProjectResolver";
import UserRelationsResolver from "./resolvers/UserRelationsResolver";
import UserResolver from "./resolvers/UserResolver";

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
      MLModelResolver,
      ProjectRelationsResolver,
      UserRelationsResolver,
      MLModelRelationsResolver
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
