import { _Data } from "./datasource";
import { Product ,Subscriber ,Subscription,
         Category,ProductCategory} from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { CreateProductDto,CreateSubscriptionDto   } from "../dto/"

export class ProductService extends _Data {
  constructor (){
      super()
  }

  async all(userId?:number):Promise<Product[]|Error>
  {
  
    const products= await this.em.find(Product,{
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
   
   if (dto.category instanceof Array){
       const categories= []
       dto.category?.forEach(async (_category:any)=>{
         const productcat=new ProductCategory()
         const category=await this.em.findOneOrFail(Category,{
          where:{
           id:_category.id,
           name:_category.name
               }
          })
          productcat.category=category
          product.categories.push(productcat)
       })
       
   }
   else{
  
   const productcat=new ProductCategory()
   const category=await this.em.findOneOrFail(Category,{
     where:{
       id:dto.category.id,
       name:dto.category.name
     }
   })
   productcat.category=category
   product.categories.push(productcat)
   }
   return product
 }
async subscribe(dto:CreateSubscriptionDto):Promise<Subscription>{
  const {itemsIds,userId}=dto
  let products:Product[]=[];
  itemsIds.forEach(async (id:number) =>{
     const p= await this.em.findOneOrFail(Product,{
       where:{id:id}
     })
    products.push(p)
  })
 let subscription=new Subscription()
 const subscriber= await this.em.findOneOrFail(Subscriber,{
   where:{id:parseInt(userId)}
 })
  products.forEach( (p:Product)=>{
    subscription?.products.push(p)
    p.subscriptions?.push(subscription)
  })
  subscription.user=subscriber
  return await this.em.save(Subscription,subscription)
}
  
}
