import { ClassConstructor, plainToClass } from "class-transformer";
import { validate } from "class-validator";

export const validatorDto = async <T extends ClassConstructor<any>>(
  dto: T,
  obj: object
) => {
  //console.log(obj)
  
  const objInstance = plainToClass(dto, obj);
  console.log(objInstance)
  // validating and check the errors, throw the errors if exist
  const errors = await validate(objInstance);
  // errors is an array of validation errors
  if (errors.length > 0) {
   console.warn( errors.map(({ property ,constrains}) =>{messages:Object.values(constrains)}))
 }
  
}
