/// <reference path="../../node_modules/@types/mongoose/index.d.ts" />
import { Document, Schema } from 'mongoose';
export interface IUser extends Document {
    name: string;
    email: string;
    gameHistory: string;
}
export declare const UserSchema: Schema<any>;
declare const User: import("mongoose").Model<IUser, {}>;
export default User;
