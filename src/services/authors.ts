import { Injectable , Inject } from "@decorators/di";
import { Article,User,Author } from "../entity/"
import { DataSource ,AppDataSource  } from "../includes"
import { CreateArticleDto } from "../dto/create-article.dto"
import { isNumeric,nationalIdvalid } from "../helpers";

@Injectable()
export class AuthorService {
  
  public  datasource:DataSource=AppDataSource
  constructor ( ){}

  async all():Promise<Author[]>{
   // console.log(this.datasource)
    return await this.datasource.manager.find(Author)
  }
  
  async id(userId:string):Promise<Author|void> {


    if(isNumeric(userId)==true){
      console.log(nationalIdvalid(userId))
      const _id=Number(userId)
     let user=await this.datasource.getRepository(Author).findOneOrFail({
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
   // else return 
  }

  async articles():Promise<Article[]|void>{
    return
  }
  
}
