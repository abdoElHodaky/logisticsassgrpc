import { validate } from 'class-validator';
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
export class ValidatedMiddleware implements Middleware {
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
    //console.log(body)
   // if(typeof(req?.body))
    const errors=await validate(body)
    console.log(errors)
    if(errors?.length!=0) 
      {res.status(400).jsonp(errors)}
    else next();
  }
}
