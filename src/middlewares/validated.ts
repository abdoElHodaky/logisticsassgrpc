
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
//import {services} from "../services/enum";
//var jwt = require('jsonwebtoken');
export class ValidatedMiddleware implements Middleware {
  async use(request: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const req= request
  
     
    }
      
    next();
  }
}
