import { Injectable , Inject } from "@decorators/di";
import { User } from "../entity/"
import { DataSource ,AppDataSource  } from "../includes"
import { CreateUserDto } from "../dto/create-user.dto"
import { isNumeric,nationalIdvalid } from "../helpers";

//@Injectable()
export class AuthService {
  
  public  datasource:DataSource=AppDataSource
  constructor ( ){}

  async login():Promise<User>{
    
  }
  
  async create():Promise<User|void> {


    
  }
  
}
