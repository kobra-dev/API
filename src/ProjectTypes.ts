import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class ProjectsUserFilter {
    @Field({ nullable: true })
    searchTerm?: string;

    @Field({ nullable: true })
    skip?: number;

    @Field({ nullable: true })
    take?: number

    @Field({ nullable: true })
    sortByNewest?: boolean

    @Field({ nullable: true })
    isPublic?: boolean
}

@ArgsType()
export class ProjectsFilter extends ProjectsUserFilter {
    @Field({ nullable: true })
    user?: string;
}

@ArgsType()
export class NewProjectInput {
    @Field()
    name: string;

    @Field()
    isPublic: boolean;

    @Field({ nullable: true })
    summary?: string
    
    @Field({ nullable: true })
    description?: string;
    
    @Field({ nullable: true })
    projectJson?: string;

    @Field({ nullable: true })
    parentId?: string;
}

@ArgsType()
export class EditProjectInput {
    @Field({ nullable: true })
    name?: string;

    @Field({ nullable: true })
    summary?: string
    
    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true })
    isPublic?: boolean;
    
    @Field({ nullable: true })
    projectJson?: string;

    @Field({ nullable: true })
    parentId?: string
}