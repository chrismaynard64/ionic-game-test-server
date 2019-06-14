import User, { IUser, UserSchema} from '../schema/user';

export class DbService {

    dn =null;

    constructor(private db){
            this.db = db;
    }


    getUser(email) {

        return User.findOne({ email: email});

    }
}