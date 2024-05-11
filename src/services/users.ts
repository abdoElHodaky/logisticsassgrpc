import {FindOptionsRelationByString,IsNull} from "typeorm";
import { Injectable , Inject } from "@decorators/di";
import { Article,User,Author } from "../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"
import { isNumeric,nationalIdvalid } from "../helpers";
import { NotFoundError , Error ,TypeError } from "common-errors";
import { _Data } from "./datasource";
import { isEmpty} from "../helpers";
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
      ]
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
        ]
      })
      return user }
      catch (error:any){
        return new NotFoundError("User",error)
      }
    }
    else return new TypeError("userId should be number")
  }
  async defaults():Promise<void>{
    let users=  await this.datasource.manager.find(User,{
  where: [
    {
      username: '',
      passwordHash: ''
    },
    {
      username: IsNull(),
      passwordHash:IsNull()
    },
  ],
});
 users.forEach(e=>{
  // if(isEmpty(e)==true){
  e.username= `test_279346__${e.id}`
  e.passwordHash=`test_297438__${e.id}`
  e.firstName=`Timber_`
  e.lastName=`Saw__${e.id}`
   //}
 })
    
await this.datasource.manager.save(User,users)
    
  }
  
}
