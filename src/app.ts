import { ApolloServer } from "apollo-server";
import "reflect-metadata";
import { Arg, Args, Authorized, buildSchema, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Container, Inject, Service } from "typedi";
import { auth0AuthChecker } from "./authChecker";
import jwt, { JwtHeader, SigningKeyCallback, VerifyOptions } from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';
import { Dataset, NewDatasetInput } from "./DatasetTypes";
import { Project, NewProjectInput, EditProjectInput, DBProject, AddProjectStatus, EditProjectStatus } from "./ProjectTypes";
import { MongoClient } from "mongodb";
import shortid from "shortid";
import { DBUpdate, Update } from "./UpdateTypes";

import dotenv from "dotenv";
dotenv.config();

@Service()
@Resolver(Project)
class ProjectResolver {
    @Inject("MONGODB")
    mongoClient: MongoClient;

    // Separate mapper so that TypeScript knows it is supposed to return a Project
    // Convert a DBProject to a Project
    projectsMappper: { (_: DBProject): Project } = item => ({
        id: item._id,
        user: item.user,
        name: item.name,
        isPublic: item.isPublic,
        description: item.description,
        projectJson: item.projectJson,
        lastModified: item.lastModified
    });

    addLastModified: { (_: Partial<DBProject | Project>): any } = item => ({
        ...item,
        lastModified: new Date()
    }); 

    @Authorized()
    @Query(returns => Project, { nullable: true })
    async project(@Arg("id") id: string) {
        const result = await this.mongoClient.db('kobra').collection('projects').findOne({ _id: id });
        return result === null ? undefined : this.projectsMappper(result);
    }

    @Query(returns => [Project])
    async projects() {
        return await this.mongoClient.db('kobra').collection('projects').find().map(this.projectsMappper).toArray();
    }

    @Query(returns => [Project])
    async getProjectsByUser(@Arg("user") user: string, @Ctx() context: any) {
        console.log(context);
        if(context.undefined === undefined) {

        }
        return await this.mongoClient.db('kobra').collection('projects').find({ user: user }).map(this.projectsMappper).toArray();
    }

    @Authorized()
    @Mutation(returns => AddProjectStatus)
    async addProject(@Args() newProjectData: NewProjectInput, @Ctx() context: any): Promise<AddProjectStatus> {
        console.log(context);
        console.log(await context.user);
        const projectDoc : DBProject = this.addLastModified({
            _id: shortid.generate(),
            user: newProjectData.user,
            name: newProjectData.name,
            isPublic: newProjectData.isPublic,
            description: newProjectData.description,
            projectJson: newProjectData.projectJson
        });
        const result = await this.mongoClient.db('kobra').collection('projects').insertOne(projectDoc);
        return {
            id: result.insertedId,
            success: result.result.ok === 1
        };
    }

    @Mutation(returns => EditProjectStatus)
    async editProject(@Arg("id") id: string, @Args() editProjectData: EditProjectInput): Promise<EditProjectStatus> {
        const result = await this.mongoClient.db('kobra').collection('projects').updateOne({ _id: id }, {
            // Remove properties whose values are undefined, credit to ppierre's comment on https://stackoverflow.com/a/45091073
            $set: this.addLastModified(Object.fromEntries(Object.entries(editProjectData).filter(([k, v]) => (v != null))))
        });
        return {
            nModified: result.result.nModified,
            success: result.result.ok === 1
        };
    }

    @Mutation(returns => EditProjectStatus)
    async removeProject(@Arg("id") id: string): Promise<EditProjectStatus> {
        const result = await this.mongoClient.db('kobra').collection('projects').deleteOne({ _id: id });
        return {
            nModified: result.deletedCount === undefined ? 0 : result.deletedCount,
            success: result.result.ok === 1
        };
    }
}

@Service()
@Resolver(Dataset)
class DatasetResolver {
    @Inject("MONGODB")
    mongoClient: MongoClient;

    @Query(returns => Dataset)
    dataset(@Arg("id") id: number) {
        return new Dataset();
    }

    @Query(returns => [Dataset])
    datasets() {
        return [new Dataset];
    }

    @Query(returns => String)
    getDatasetContents(@Arg("id") id: number) {
        return "test";
    }

    @Mutation(returns => Dataset)
    addDataset(@Arg("newDatasetData") newDatasetData: NewDatasetInput) {
        return new Dataset();
    }

    @Mutation(returns => Dataset)
    editDataset(@Arg("id") id: number, @Arg("newDatasetData") newDatasetData: NewDatasetInput) {
        return new Dataset();
    }

    @Mutation(returns => Boolean)
    editDatasetContents(@Arg("id") id: number, @Arg("newContents") newContents: string) {
        return false;
    }

    @Mutation(returns => Boolean)
    removeDataset(@Arg("id") id: number) {
        return false;
    }
}

@Service()
@Resolver(Update)
class UpdateResolver {
    @Inject("MONGODB")
    mongoClient: MongoClient;

    updatesMappper: { (_: DBUpdate): Update } = item => ({
        title: item.title,
        contents: item.contents,
        date: item._id.getTimestamp()
    });

    @Query(returns => [Update])
    async updates() {
        return await this.mongoClient.db('kobra').collection('changelog').find().map(this.updatesMappper).toArray();
    }
}

// MongoDB
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${encodeURIComponent(process.env.MONGODB_PASS as string)}@kobra-dev.ontts.mongodb.net/kobra?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true });
Container.set("MONGODB", client);

// Authorization
const authClient = jwksClient({
    jwksUri: `${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`
});

function getKey(header: JwtHeader, cb: SigningKeyCallback) {
    if(header.kid === undefined) return;
    authClient.getSigningKey(header.kid, function (err, key) {
        var signingKey = key.getPublicKey();
        cb(null, signingKey);
    });
}

const authOptions: VerifyOptions = {
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `${process.env.AUTH0_DOMAIN}/`,
    algorithms: ['RS256']
};

try {
    client.connect().then(() => {
        buildSchema({
            resolvers: [ProjectResolver, DatasetResolver, UpdateResolver],
            authChecker: auth0AuthChecker,
            container: Container
        }).then(async schema => {
            const server = new ApolloServer({
                schema,
                playground: true,
                context: ({ req }) => {
                    const token = req.headers.authorization;
                    if(token === undefined) return { undefined };
                    const user = new Promise((resolve, reject) => {
                        console.log(token);
                        jwt.verify(token, getKey, authOptions, (err, decoded) => {
                            if(err) return reject(err);
                            // @ts-ignore
                            resolve(decoded);
                        })
                    });

                    return { user };
                }
            });
        
            // Might need to change the port later, 4000 interferes with other things on my computer
            const { url } = await server.listen(4001);
            console.log(`Server is running, GraphQL Playground available at ${url}`);
        });
    });
}
finally {
    client.close();
}