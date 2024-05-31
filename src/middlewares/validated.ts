import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Middleware } from '@decorators/express';
import {Request,Response,NextFunction  } from "express";
import { Request as JWTRequest } from "express-jwt";
import { Dto} from "../dto/Dto";
export class ValidatedMiddleware implements Middleware {

  validatorDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: object
) => {
  // tranform the literal object to class object
  const objInstance = plainToClass(dto, obj);
  // validating and check the errors, throw the errors if exist
  const errors = await validate(objInstance);
  // errors is an array of validation errors
  if (errors.length > 0) {
  /*  throw new TypeError(
      `validation failed. The error fields : ${errors.map(
        ({ property }) => property
      )}`
    );
  }*/ console.warn(errors)
}

  async use(req: JWTRequest, res: Response, next: NextFunction): Promise<void> {
    const {body}= req
    //console.log(body)
   // if(typeof(req?.body))
    validate(body as Dto).then(console.log).catch(console.log)
    next()
  }
}
