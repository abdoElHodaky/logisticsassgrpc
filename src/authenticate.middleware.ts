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
      console.log(jwt.verify(token,"secret"))
    }
    res.end("")
    next();
  }
}
