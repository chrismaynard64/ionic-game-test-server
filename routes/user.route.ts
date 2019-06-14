import {Request, Response} from "express";
import { UserController } from "../controllers/user.controller";

export class Routes {       
  userController = new UserController();


    public routes(app): void {          
        app.route('/api/user')
        .get(this.userController.getUsers)
        .post(this.userController.checkUser)    
   //     .put(this.userController.checkUser)    
        .all((req: Request, res: Response, next) => {
            next(req, res);
        });  

     }
}