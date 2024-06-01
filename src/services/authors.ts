import { Injectable , Inject } from "@decorators/di";
import { Article,User,Author } from "../entity/"
//import { DataSource ,AppDataSource  } from "../includes"
import { CreateAuthorDto } from "../dto/"
import { isNumeric,nationalIdvalid } from "../helpers";
import { NotFoundError ,Error ,TypeError } from "common-errors";
import {_Data} from "./datasource"
//@Injectable()
export class AuthorService  extends _Data {
  
  //public  datasource:DataSource=AppDataSource
  constructor ( ){
    super()
  }

  async all():Promise<Author[]|NotFoundError>{
   try{
     let users=await this.datasource.getRepository(Author).find({
        
        relations:{
          tickets:true,
          articles:true
        },
       cache:true
      })
      if(users.length!=0) return users
      else throw new Error("NotFound")
    } catch(err:any){
     console.log(err)
      return new  NotFoundError("author",err)
    }
    
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
        },
       cache:true
      })
      return user
    } catch(err:any){
      return new  NotFoundError("author",err)
    }
    }
    else return new TypeError("authorId should be number")
  }

  async create(authord:any):Promise<Author|Error|void>{
    let _author;
   // console.log(authord)
    let dauthor=authord
    try{
    if(authord instanceof User){
      //author.type="author"
      dauthor=await this.datasource.manager.create(Author,{
        ...authord//,type:"author"
      })
     // await this.datasource.save(Author,dauthor)
      return dauthor
    }
    else{
      throw new TypeError(`Argument should be of type 'User'`)
    }
    }catch(err:any){return err}
  }
  
}
