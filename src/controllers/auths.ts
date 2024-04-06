import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
import { LoginUserDto } from "../dto/login-user.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response ,Request} from "express"

@Controller('/auth')
export class AuthController {
  constructor(){}

  @Post("login")
  async login(@Body() loginUserDto: LoginUserDto){
     const { username,passwordHash}=loginUserDto
     let user= await AppDataSource.manager.findOneOrFail(User,{where:{
        username:username,
        passwordHash:passwordHash,
       // id:id
    }})

    if (user) return {message:"Login Succefully",user:user};
    else return {message:"Login failed"};
    
  }

  @Post("register")
  async register(@Body() user:User):Promise<User>{
    
    let _user:User=user
    console.log(_user)
    _user=await AppDataSource.manager.save(User,_user)
    return _user
  }

  
}
