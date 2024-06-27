import { _Data } from "./datasource";
import { Product ,User ,Subscription} from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { CreateProductDto,CreateSubscriptionDto   } from "../dto/"

export class ProductService extends _Data {
  constructor (){
      super()
  }

  async all(userId?:number):Promise<Product[]|Error>
  {
  
    const products= await this.datasource.manager.find(Product,{
      where:(userId!=undefined)?{supplier:{id:userId}}:{},
      relations:{
        supplier:true
      },
      cache:true
    })
    return (products.length!=0)? products : new NotFoundError("Products")
  }

async create(dto:CreateProductDto ):Promise<Product|void>{
   const product=await this.em.create(Product,dto)
   return product
 }
async subscribe(dto:CreateSubscriptionDto):Promise<Subscription>{
  const {itemsIds,userId}=dto
  const products=await itemsIds.map(async (id:number)=>{
     return await this.em.findOneOrFail(Product,{
       where:{id:id}
     })
  })
 let subscription=new Subscription()
 const subscriber= await this.em.findOneOrFail(User,{
   where:{id:parseInt(userId)}
 })
  products.forEach((p:Product)=>{
    subscription.products.push(p)
    p.subscriptions.push(subscription)
  })
  subscription.subscriber=subscriber
  return await this.em.save(Subscription,subscription)
}
  
}
