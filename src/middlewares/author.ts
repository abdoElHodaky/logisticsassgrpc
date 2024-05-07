import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import {services} from "../services/enum";
//var jwt = require('jsonwebtoken');
export class AuthorMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
    const service=services.User
    if(req.auth !=undefined){
    let user= await service.id(req?.auth.id)
    if(user.type!="Author") res.jsonp({message:"Logged in User not Author"})
    }
    else {
      res.status(401).json({message:"you should login"})
    }
    next();
  }
}
