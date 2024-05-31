import { IsNotEmpty,validate,ValidationError} from "class-validator";
export class LoginUserDto {
  @IsNotEmpty()
  readonly username:string
 // readonly email:string
  @IsNotEmpty()
  readonly passwordHash:string

async  _validate():Promise<Array<any>>{
   return  await validate(this)
 }

}
