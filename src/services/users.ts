import { Injectable , Inject } from "@decorators/di";
import { DataSource } from "typeorm"
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { User } from "../entity/User";
import { AppDataSource , _datasourceInject } from "../data-source";
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class UserService {
  constructor (@Inject(_datasourceInject) private readonly datasource: DataSource){}

  async all():Promise<User>{
    return await this.datasource.manager.find(User)
  }
  
  async id(userId:string):Promise<User>{


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
  
}
