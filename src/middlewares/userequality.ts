
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import {services} from "../services/enum";
//var jwt = require('jsonwebtoken');
export class UserEqulityMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
   // const service=services.User
    const {auth,params}=req
    if(auth !=undefined && params.includes("userId")){
      if (auth?.id!=parseInt(params["userId"]  )){
       res.status(403).jsonp({message:"userId should equal your Id"})
      }   
    }
      
    next();
  }
}
