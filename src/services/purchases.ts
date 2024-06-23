import { _Data } from "./datasource";
import { Purshase ,PurshaseItem ,User,Product} from "../entity/"
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
  
async create(dto:CreatePurshaseDto ):Promise<Purshase|void>{
   const purshase=new Purshase()
   const {userId,itemsIds}=dto
  /* const items=  itemsIds.map(async (id:number):Promise<PurshaseItem> =>{
     const item=new PurshaseItem()
     let product:Product=await this.datasource.manager.findOneOrFail(Product,{
       where:{id:id}
     })
     item.product=product
     item.purshase=purshase
     return await item
   })*/
  const purchase=itemsIds.reduce((acc:any,id:any)=>{
     const item=new PurshaseItem()
     let product:Product=await this.datasource.manager.findOneOrFail(Product,{
       where:{id:id}
     })
     item.product=product
     item.purshase=purshase
     purchase.items.push(item)
     return purchase
  })
  
   let user=await this.datasource.manager.findOneOrFail(User,{
     where:{id:parseInt(userId)}
   })
   purshase.user=user
   return await this.datasource.manager.save(Purshase,purshase)
 } 

  
}
