//import * as  mongoose from 'mongoose';
import { Document, Schema, model} from 'mongoose';


export interface IUser extends Document {
    name: string;
    email: string;  
    gameHistory: string;
}

export const UserSchema = new Schema({
    name: { type: String, required: true},
    email: { type: String, required: true},
    gameHistory: String,    
    
})

const User = model<IUser>('User', UserSchema);
export default User
