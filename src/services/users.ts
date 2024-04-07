import { Injectable , Inject } from "@decorators/di";
import { DataSource } from "typeorm"
import { Article,User,Author } from "../entity/"
//import {  _datasourceInject } from "../data-source";
import { CreateArticleDto } from "../dto/create-article.dto"
import { isNumeric,nationalIdvalid } from "../helpers";
//@Injectable()
export class UserService {
  
  private readonly datasource: DataSource
  constructor ( ){}

  async all(){
    return await this.datasource.manager.find(User)
  }
  
  async id(userId:string):Promise<User|void>{


    if(isNumeric(userId)==true){
      console.log(nationalIdvalid(userId))
      const _id=Number(userId)
     let user=await this.datasource.getRepository(User).findOneOrFail({
        where:{
          id:_id
        },
        relations:{
          tickets:true,
          verifications:true
        }
      })
      return user
    }
    else return 
  }
  
}
