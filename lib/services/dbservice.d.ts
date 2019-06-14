/// <reference path="../../node_modules/@types/mongoose/index.d.ts" />
/// <reference types="mongoose" />
import { IUser } from '../schema/user';
export declare class DbService {
    private db;
    dn: any;
    constructor(db: any);
    getUser(email: any): import("mongoose").DocumentQuery<IUser, IUser, {}>;
}
