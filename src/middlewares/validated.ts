import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { LoginUserDto,validatorDto, CreateArticleDto } from "../dto/";
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


export class ValidatedCreatedArticle implements Middleware {
  
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
  
    // console.log(typeof(body))
    const errors=await validatorDto(CreateArticleDto,body)
     console.log(errors)
    if (errors!=[]){
      res.status(400).jsonp({
        FiledsMessages:errors.map({constrains}=>Object.values).join(" ,")
      })
    }
    next()
  }


  
}
