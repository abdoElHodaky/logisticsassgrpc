import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { LoginUserDto,ValidatorDto} from "../dto/Dto";
import { Error } from "common-errors";
export class ValidatedLogin implements Middleware {
  
  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
   try{
     console.log(typeof(body))
    const errs=await ValidatorDto(LoginUserDto,body)
    if(errs=={}){
      next()
    }
    else{
      throw new Error("Login Information not provided or not existed")
    }
  }catch(err:any){
     res.status(400).json({messages:Object(errors).values()})
   }
  }


  
}
