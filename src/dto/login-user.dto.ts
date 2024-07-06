import { IsNotEmpty} from "class-validator";
import {Dto} from "./Dto";
export class LoginUserDto  extends Dto{
  @IsNotEmpty()
  readonly username:string
 // readonly email:string
  @IsNotEmpty()
  readonly passwordHash:string

}
