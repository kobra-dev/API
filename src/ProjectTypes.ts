import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ProjectsFilter {
    @Field({ nullable: true })
    user?: string;

    @Field({ nullable: true })
    searchTerm?: string;

    @Field({ nullable: true })
    skip?: number;

    @Field({ nullable: true })
    take?: number
}

@ArgsType()
export class NewProjectInput {
    @Field()
    name: string;

    @Field()
    isPublic: boolean;
    
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
    isPublic?: boolean;
    
    @Field({ nullable: true })
    projectJson?: string;
}