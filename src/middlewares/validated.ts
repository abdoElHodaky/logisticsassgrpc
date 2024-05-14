import { validate } from 'class-validator';
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
export class ValidatedMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
    const errors=await validate(req?.body)
    if(errors) res.status(400).jsonp(errors)
    
      
    next();
  }
}
