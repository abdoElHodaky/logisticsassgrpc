import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
export class AuthenticateMiddleware implements Middleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    console.log(req)
    next();
  }
}
