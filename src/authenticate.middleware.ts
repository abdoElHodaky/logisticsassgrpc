import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { expressjwt, ExpressJwtRequest } from "express-jwt";
export class AuthenticateMiddleware implements Middleware {
  public use(req: ExpressJwtRequest, res: Response, next: NextFunction): void {
    console.log(req?.auth)
    next();
  }
}
