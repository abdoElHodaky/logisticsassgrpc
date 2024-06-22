import { _Data } from "./datasource";
import { Purshase ,PurshaseItem } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { CreatePurshaseDto } from "../dto/"
import { ProductService,UserService } from "./";
//@Injectable()
export class PurshaseService extends _Data {
  private productS=new ProductService();
  private userS=new UserService();
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
  
async create(dto:CreatePurshaseDto ):Promise<Purshase|void>{
   const purchase=await this.datasource.manager.create(Purshase,{})
   const {userId,itemsIds}=dto
   const items= itemsIds.map(async (id:number)=>{
     const item=new PurshaseItem()
     item.product=await this.ProductService.id(id)
     return item
   })
   purchase.items.push(...items)
   purchase.user=await this.userS.id(userId)
   return await this.datasource.manager.save(Purshase,purchase)
 } 

  
}
