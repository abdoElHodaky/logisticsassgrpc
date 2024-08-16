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
  private readonly relation:string[]=[ "articles", "tickets","subscriptions", "verifications"  ]
  constructor ( ){
    super()
  }

  async all(relation?:string[]):Promise<User[]>{
    const _relation=(relation!=undefined)?relation : this.relation
   
    return await this.em.find(User,{
      relations:[
        ..._relation
      ],
      cache:true
    })
  }
  
  async id(userId:string,relation?:string[]):Promise<User|Error|void> {

   const _relation=(relation!=undefined)?relation : this.relation
   
    if(isNumeric(userId)==true){
     // console.log(userId)
      const _id=Number(userId)
    try{
      let user:User=await this.em.findOneOrFail(User,{
        where:{
          id:_id
        },
        relations:[
          ..._relation
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
  
  async activatePlan(planId:number):Promise<void>{
    
  }
  
}
