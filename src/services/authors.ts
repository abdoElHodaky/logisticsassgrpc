import { Injectable , Inject } from "@decorators/di";
import { Article,User,Author } from "../entity/"
import { DataSource ,AppDataSource  } from "../includes"
import { CreateAuthorDto } from "../dto/"
import { isNumeric,nationalIdvalid } from "../helpers";
import { NotFoundError ,Error ,TypeError } from "common-errors";
//@Injectable()
export class AuthorService {
  
  public  datasource:DataSource=AppDataSource
  constructor ( ){}

  async all():Promise<Author[]>{
   // console.log(this.datasource)
    return await this.datasource.manager.find(Author)
  }
  
  async id(userId:string):Promise<Author|NotFoundError|void> {


    if(isNumeric(userId)==true){
      //console.log(nationalIdvalid(userId))
      const _id=Number(userId)
    try{
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
    } catch(err:Error){
      return new  NotFoundError("author",err)
    }
    }
    else return new TypeError("authorId should be number")
  }

  async create(author:Author):Promise<Author>{
    let _author;
   _author=await this.datasource.getRepository(Author).create(author)
    return _author
  }
  
}
