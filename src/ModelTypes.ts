import { Args, ArgsType, Field } from "type-graphql";

@ArgsType()
export class NewModelInput {
    @Field()
    modelJson: string;

    @Field()
    modelParams: string;

    @Field()
    projectId: string;
}

@ArgsType()
export class EditModelInput {
    @Field({ nullable: true })
    modelJson?: string;

    @Field({ nullable: true })
    modelParams?: string;
}