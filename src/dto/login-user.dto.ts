import { IsNotEmpty} from "class-validator";
export class LoginUserDto {
  @IsNotEmpty()
  readonly username:string
 // readonly email:string
  @IsNotEmpty()
  readonly passwordHash:string
}
