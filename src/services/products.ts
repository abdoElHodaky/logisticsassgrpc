import { _Data } from "./datasource";
import { Product ,User } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { CreateProductDto,CreateSubscriptionDto   } from "../dto/"
import { UserService} from "./users";
//@Injectable()
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
async subscribe(dto:CreateSubscriptionDto):Promise<any>{
  const {itemsIds}=dto
  const products=itemsIds.map(async (id:number)=>{
     return await this.em.findOneOrFail(Product,{
       where:{id:id}
     })
  })
 let subscription=new Subscription()
  subscription.products.push(...products)
}

  
}
