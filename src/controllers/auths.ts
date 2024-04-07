import { User } from "../entity/"
import { AuthService } from "../services/";
//import { AppDataSource } from "../_datasource";
import { LoginUserDto ,CreateUserDto } from "../dto/"
import { Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response ,Request} from "express"

@Controller('/auth')
export class AuthController {
  private authS:AuthService=new AuthService()
  constructor(){}

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto){
     //const { username,passwordHash}=loginUserDto
     let user= await this.authS.login(loginUserDto)

    if (user) return {message:"Login Succefully",user:user};
    else return {message:"Login failed"};
    
  }

  @Post("register")
  async register(@Body() user:CreateUserDto):Promise<User>{
    
    let _user:User
    _user=await this.authS.create(user)
    return _user
  }

  
}
