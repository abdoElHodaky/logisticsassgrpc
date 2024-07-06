import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import {services} from "../services/enum";
import { Env } from "../env";
var jwt = require('jsonwebtoken');
export class AuthenticateMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
    const service=services.User
    const secret=Env.JWT_SECRET || "secret"
    let authorizeHeader=req.headers?.authorization
    if(authorizeHeader!==undefined){ 
      let token=authorizeHeader.split(" ")[1]
      let decoded=jwt.decode(token,secret)
      if(Date.now() < decoded.exp * 1000) {
        decoded=jwt.verify(token,secret)
        req.auth= await service.id(decoded.id)
      }
      else{res.status(400).json({message:"Token expired, you should login"})}
    }
     else{res.status(401).json({message:"you should login"})}
 
   // res.end("")
    next();
  }
}
