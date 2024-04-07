import { Injectable , Inject } from "@decorators/di";
import { User } from "../entity/"
import { DataSource ,AppDataSource  } from "../includes"
import { LoginUserDto } from "../dto/login-user.dto"
import { isNumeric,nationalIdvalid } from "../helpers";

//@Injectable()
export class AuthService {
  
  public  datasource:DataSource=AppDataSource
  constructor ( ){}

  async login(loginUserDto:LoginUserDto):Promise<User>{
    const { username,passwordHash}=loginUserDto
     let user= await this.datasource.manager.findOneOrFail(User,{where:{
        username:username,
        passwordHash:passwordHash,
       // id:id
    }})
    return user

  }
  
  async create(user:User):Promise<User|void> {

    let _user:User=user
    console.log(_user)
    _user=await this.datasource.manager.save(User,_user)
    return _user
    
  }
  
}
