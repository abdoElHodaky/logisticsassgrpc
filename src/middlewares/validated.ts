import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { LoginUserDto,validatorDto,
        CreateUserDto,CreateArticleDto } from "../dto/";
import { Error } from "common-errors";
import {ValidationError} from "class-validator";
//import { instanceToPlain } from 'class-transformer';

export class ValidatedLogin implements Middleware {
  
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
  
    // console.log(typeof(body))
    let errors=await validatorDto(LoginUserDto,body)
    //errors=errors.map(e=>instanceToPlain(ValidationError,e))
     console.log(errors)
    if (errors!=[]){
      res.status(400).json({
        messages:errors.map((e:any)=>{
      // const {constraints}=e
        return (e?.constraints!={})? Object.values(e?.constraints):[]
        }).join(" , ")
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
     res.status(400).json({
        messages:errors.map((e:any)=>{
      // const {constraints}=e
        return (e?.constraints!={})? Object.values(e?.constraints):[]
        }).join(" , ")
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
     res.status(400).json({
        messages:errors.map((e:any)=>{
      // const {constraints}=e
        return (e?.constraints!={})? Object.values(e?.constraints):[]
        }).join(" , ")
      })
    }
    next()
  }
 

  
}

export class ValidatedCreatedProduct implements Middleware {
        
   async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
     const {body}= req
  
    // console.log(typeof(body))
    const errors=await validatorDto(CreateProductDto,body)
     console.log(errors)
    if (errors!=[]){
     res.status(400).json({
        messages:errors.map((e:any)=>{
      // const {constraints}=e
        return (e?.constraints!={})? Object.values(e?.constraints):[]
        }).join(" , ")
      })
    }
    next()
  }
}

