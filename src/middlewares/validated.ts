import { validate } from 'class-validator';
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
export class ValidatedMiddleware implements Middleware {
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
    console.log(body)
   // if(typeof(req?.body))
    const errors=await validate(req?.body)
    if(errors!=undefined) res.status(400).jsonp(errors)
    
    next();
  }
}
