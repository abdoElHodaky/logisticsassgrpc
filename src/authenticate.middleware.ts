import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
export class AuthenticateMiddleware implements Middleware {
  public use(req: Request, res: Response, next: NextFunction): void {
   if((req["auth"] && (req["auth"]=={}|| req["auth"]==null )) || (req?.user && (req?.user=={} || req?.user==null))){
     res.status(401).json({message:"Please sign in"})
   }
    next();
  }
}
