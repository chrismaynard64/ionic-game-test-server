import * as mongoose from 'mongoose';
import User from '../schema/user';
import { Request, Response } from 'express';

export class UserController  {


    public   getUsers(req: Request, res: Response)  {
        User.find({}).then(users => {
            if (users) {
                res.json(users);
            }
        });
    }


    public   checkUser(req: Request, res: Response)  {
        console.log("Checking user:" + req.params.email);
        console.log("Checking user:" + req.body);
        User.findOne({ email: req.body.email}).then(user => {
             if (user) {
                console.log('email:' + req.body.email);
                 res.json(user);
             } else {
                let usr = new User(req.body);
               // let usr = new User({ name: 'Bob', email: 'bob@test.com'});
                console.log(req.body);
                usr.save().then(user => {
                    res.send(user);
                }).catch(err => {
                    res.send(err);
                });
             }
        })
    }

}