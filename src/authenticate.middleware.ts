import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { expressjwt, ExpressJwtRequest } from "express-jwt";
import {services} from "./services/enum";
export class AuthenticateMiddleware implements Middleware {
  async use(request: Request, res: Response, next: NextFunction): void {
    const req= request as ExpressJwtRequest
    const service=services.User
    let user= await service.id(req?.auth.id)
    console.log(user)
    next();
  }
}
