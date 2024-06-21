import { _Data } from "./datasource";
import { Purshase ,User,PurchaseItem } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { CreatePurshaseDto } from "../dto/"

//@Injectable()
export class PurshaseService extends _Data {
  constructor (){
      super()
  }

  async all(purshaseId?:number,userId?:number):Promise<Purshase[]|Error>
  {
  
    const purchases= await this.datasource.manager.find(Purshase,{
      where:[
        (userId!=undefined)?{user:{id:userId}}:{},
        (purshaseId!=undefined)?{id:purshaseId}:{},
        ],
      relations:{
        user:true,
        items:true,
      },
      cache:true
    })
    return (purchases.length!=0)? purchases : new NotFoundError("Purshase")
  }
  
/*async create(dto:CreatePurshaseDto ):Promise<Purshase|void>{
   const purchase=await this.datasource.manager.create(Purshase,dto)
   return purchases
 } */

  
}
