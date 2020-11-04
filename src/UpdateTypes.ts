import { ObjectId } from "mongodb";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Update {
    @Field()
    title: string;

    @Field()
    contents: string;

    @Field()
    date: Date;
}

export interface DBUpdate {
    _id: ObjectId;
    title: string;
    contents: string;
}