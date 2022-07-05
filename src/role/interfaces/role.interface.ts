import { Document } from 'mongoose';

export interface IRole extends Document {
    readonly _id: string;
    readonly name: string;
    readonly mobile:string;
}
