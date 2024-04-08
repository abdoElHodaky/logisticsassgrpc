import { Injectable , Inject } from "@decorators/di";
import { Article,User,Author } from "../entity/"
import { DataSource ,AppDataSource  } from "../includes"
import { CreateArticleDto } from "../dto/create-article.dto"
import { isNumeric,nationalIdvalid } from "../helpers";

//@Injectable()
export class UserService {
  
  public  datasource:DataSource=AppDataSource
  constructor ( ){}

  async all():Promise<User[]>{
    //console.log(this.datasource)
    return await this.datasource.manager.find(User)
  }
  
  async id(userId:string):Promise<User|void> {


    if(isNumeric(userId)==true){
      console.log(userId)
      const _id=Number(userId)
    try{
      let user:User=await this.datasource.getRepository(User).findOneOrFail({
        where:{
          id:_id
        },
        relations:{
          tickets:true,
          verifications:true
        }
      })
      return user }
      catch (error){
        console.error(error)
      }
    }
    //else return 
  }
  
}
