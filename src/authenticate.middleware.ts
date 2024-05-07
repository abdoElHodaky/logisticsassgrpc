import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import {services} from "./services/enum";
var jwt = require('jsonwebtoken');
export class AuthenticateMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
    const service=services.User
   // let user= await service.id(req?.auth.id)
    let authorizeHeader=req.headers?.authorization
    if(authorizeHeader!==undefined){ 
      let token=authorizeHeader.split(" ")[1]
      let decoded=jwt.verify(token,"secret")
      req.auth= await service.id(decoded.id)
      if(Date.now() < decoded.exp * 1000) {console.log(true)}
      //else{res.status(401).json({message:"Token expired, you should login"})}
    }
   // res.end("")
    next();
  }
}
