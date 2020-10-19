import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class Dataset {
    @Field(type => ID)
    id: number;

    @Field()
    user: string;

    @Field()
    name: string;

    @Field({ nullable: true })
    description?: string;
}

@InputType()
export class NewDatasetInput {
    @Field()
    user: string;

    @Field()
    name: string;
    
    @Field({ nullable: true })
    description?: string;

    @Field({ nullable: true})
    b64Data?: string;
}