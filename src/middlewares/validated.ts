import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { LoginUserDto,validatorDto, CreateUserDto } from "../dto/";
import { Error } from "common-errors";
export class ValidatedLogin implements Middleware {
  
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
  
    // console.log(typeof(body))
    const errors=await validatorDto(LoginUserDto,body)
     console.log(errors)
    if (errors!=[]){
      res.status(400).jsonp({
        FiledsMessages:errors.map({constrains}=>Object.values).join(" ,")
      })
    }
    next()
  }


  
}


export class ValidatedCreatedUser implements Middleware {
  
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
  
    // console.log(typeof(body))
    const errors=await validatorDto(CreateUserDto,body)
     console.log(errors)
    if (errors!=[]){
      res.status(400).jsonp({
        FiledsMessages:errors.map({constrains}=>Object.values).join(" ,")
      })
    }
    next()
  }


  
}
