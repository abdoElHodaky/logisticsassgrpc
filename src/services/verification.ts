
import {_Data} from "./datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { UserService} from "./";
import { Verification,VerifyCode ,User } from "../entity/";
import { VerifyType} from "../entity/verifications/Verification";
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
export class VerificationService extends _Data {
  private userS=new UserService()
  constructor(){super()}
  
  async all(userId:string):Promise<Verification[]|Error>
  {
    if(isNumeric(userId)==true){
     let id=Number(userId)
    try{
    /* let user=await this.datasource.manager.findOneOrFail(User,{where:{
            id:id
           },
           relations:{
            tickets:true
           }
            })*/
    let tickets=await this.em.find(Verification,{
      where:{user:{id:id}},cache:true
    })
    if(tickets.length!=0) return tickets 
    else throw new NotFoundError("Verification")
    }
    catch (err:any){
      return err
    }

    }
    else return new TypeError("userId should be number")
  }
  
  async create(userId:number,forWhat:VerifyType):Promise<Verification|void>{
    
    let user=await this.em.findOneOrFail(User,{
      where{id:userId}
    })
    let Code=new VerifyCode()
    let verification=new Verification()
     verifications.codes.push(Code)
     verification.user=user
     verification.type=forWhat
     return await this.em.save(Verification,verification)
    
  }
  
}
