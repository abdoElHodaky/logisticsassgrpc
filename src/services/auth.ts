import { Injectable , Inject } from "@decorators/di";
import { User } from "../entity/"
import { _Data } from "./datasource";
import { LoginUserDto , CreateUserDto } from "../dto/"
import { isNumeric,nationalIdvalid } from "../helpers";
import { Error} from "common-errors";
//@Injectable()
export class AuthService extends _Data {
  
  
  constructor ( ){ super() }

  async login(loginUserDto:LoginUserDto):Promise<User|Error>{
    const { username,passwordHash}=loginUserDto
    try{
     let user= await this.em.findOneOrFail(User,{where:{
        username:username,
        passwordHash:passwordHash,
       // id:id
    }})
    return user
  }catch(err:any){
    return new Error("No Records matched",err)

  }

  }
  
  async create(cdtouser:CreateUserDto):Promise<User|void> {
    const {email,...user}=cdtouser
    let _user=await this.em.create(User,{
      email:{
        value:email
      },
      ...user
    })
    return _user
    
  }
  
}
