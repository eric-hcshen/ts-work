import { NextFunction, Response, Request, Router, response } from "express";
import  userController from "../controller/user.controller";
import  petController from "../controller/pet.controller"

export class UserAPI {
    public static create(route: Router) {
        route.get('/user', (req: Request, res: Response, next: NextFunction) => {
            //console.log('Request:' + res);
            res.send('ok');
            next();
            return;
        });
        route.post('/user', (req: Request, res: Response, next: NextFunction) => {
            new UserAPI().create(req, res, next);
        });
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        const user = await userController.CreateUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email
          });
          console.log('in create');
          const pet = await petController.CreatePet({
            owner: user._id,
            name: req.body.petName
          });
          next();
          return res.send({ user, pet });
    }
}