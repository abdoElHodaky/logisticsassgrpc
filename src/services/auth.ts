import { Injectable , Inject } from "@decorators/di";
import { User } from "../entity/"
import { _Data } from "./datasource";
import { LoginUserDto , CreateUserDto } from "../dto/"
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error} from "common-errors";
//@Injectable()
export class AuthService extends _Data {
  
  
  constructor ( ){ super() }

  async login(loginUserDto:LoginUserDto):Promise<User>{
    const { username,passwordHash}=loginUserDto
    try{
     let user= await this.datasource.manager.findOneOrFail(User,{where:{
        username:username,
        passwordHash:passwordHash,
       // id:id
    }})
    return user
  }catch(err:any){
    return new Error("No Records matched",err)

  }

  }
  
  async create(user:User):Promise<User> {

    let _user;
    _user=await this.datasource.manager.create(User,user)
    return _user
    
  }
  
}
