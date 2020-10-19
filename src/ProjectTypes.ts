import { ArgsType, Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Project {
    @Field(type => ID)
    id: string;

    @Field()
    user: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    projectJson?: string;
}

@ArgsType()
export class NewProjectInput {
    @Field()
    user: string;

    @Field()
    name: string;
    
    @Field({ nullable: true })
    description?: string;
    
    @Field({ nullable: true })
    projectJson?: string;
}

@ArgsType()
export class EditProjectInput {
    @Field({ nullable: true })
    name?: string;
    
    @Field({ nullable: true })
    description?: string;
    
    @Field({ nullable: true })
    projectJson?: string;
}

export interface DBProject {
    _id: string;
    user: string;
    name: string;
    description?: string;
    projectJson?: string;
}

@ObjectType()
export class AddProjectStatus {
    @Field()
    id: string;

    @Field()
    success: boolean;
}

@ObjectType()
export class EditProjectStatus {
    @Field()
    success: boolean;

    @Field()
    nModified: number;
}