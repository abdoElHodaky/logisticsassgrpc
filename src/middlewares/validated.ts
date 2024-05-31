import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { LoginUserDto,validatorDto} from "../dto/";
import { Error } from "common-errors";
export class ValidatedLogin implements Middleware {
  
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
  
    // console.log(typeof(body))
    const errs=await validatorDto(LoginUserDto,body)
     console.log(errs)
    if (errs!={}){
      res.status(400).json({messages:Object(errs).values()})
    }
    next()
  }


  
}
