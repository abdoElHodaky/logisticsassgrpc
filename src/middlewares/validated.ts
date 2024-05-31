import { validate } from 'class-validator';
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { Dto} from "../dto/Dto";
export class ValidatedMiddleware implements Middleware {
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
    //console.log(body)
   // if(typeof(req?.body))
    validate(body as Dto).then(console.log).catch(console.log)
    next()
  }
}
