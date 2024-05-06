import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { expressjwt, ExpressJwtRequest } from "express-jwt";
export class AuthenticateMiddleware implements Middleware {
  public use(request: Request, res: Response, next: NextFunction): void {
    const req= request as ExpressJwtRequest
    console.log(req)
    next();
  }
}
