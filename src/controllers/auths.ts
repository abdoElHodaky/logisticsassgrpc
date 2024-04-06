import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
import { LoginUserDto } from "../dto/login-user.dto"
import { Res, Post, Controller, Get, Body , Params ,Delete } from '@decorators/express';
import { Response ,Request} from "express"

@Controller('/auth')
export class AuthController {
  constructor(){}

  @Post("login")
  async login(@Res() res,@Body() loginUserDto: LoginUserDto){
     const { username,passwordHash,id}=loginUserDto
     let user= await AppDataSource.manager.findOneOrFail(User,{where:{
        username:username,
        passwordHash:passwordHash,
        id:id
    }})
  }
}









let user:User=<User>{...req.body}
    AppDataSource.manager.findOneOrFail(User,{where:{
        username:user.username,
        passwordHash:user.passwordHash,
        id:user.id
    }}).then(d=>{
        res.json({message:"Login Succefully",user:d})
    }).catch(err=>{
        res.json({message:"Login failed"})
    })
