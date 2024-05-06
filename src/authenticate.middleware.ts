import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import {services} from "./services/enum";
export class AuthenticateMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
    const service=services.User
   // let user= await service.id(req?.auth.id)
    console.log(req.headers?.authorization)
    next();
  }
}
