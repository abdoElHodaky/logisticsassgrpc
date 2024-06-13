import {FindOptionsRelationByString,IsNull} from "typeorm";
import { Injectable , Inject } from "@decorators/di";
import { Article,User,Author } from "../../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"
import { isNumeric,nationalIdvalid } from "../../helpers";
import { NotFoundError , Error ,TypeError } from "common-errors";
import { _Data } from "../datasource";
import { isEmpty} from "../../helpers";
//@Injectable()
export class UserService extends _Data {

  constructor ( ){
    super()
  }

  async all():Promise<User[]>{
    //console.log(this.datasource)
    return await this.datasource.manager.find(User,{
      relations:[
       "articles",
        "tickets"
      ],
      cache:true
    })
  }
  
  async id(userId:string):Promise<User|Error|void> {


    if(isNumeric(userId)==true){
     // console.log(userId)
      const _id=Number(userId)
    try{
      let user:User=await this.datasource.getRepository(User).findOneOrFail({
        where:{
          id:_id
        },
        relations:[
          "tickets",
          "verifications",
          "articles"
        ],
        cache:true
      })
      return user }
      catch (error:any){
        return new NotFoundError("User",error)
      }
    }
    else return new TypeError("userId should be number")
  }
  
}
