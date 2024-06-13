import { _Data } from "./datasource";
import { Product ,User } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";

//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ProductService extends _Data {
  constructor (){
      super()
  }

  async all(userId?:number):Promise<Product[]|Error>
  {
  
    const products= await this.datasource.manager.find(Product,{
      where:(userId!=undefined)?{user:{id:userId}}:{},
      relations:{
        supplier:true
      },
      cache:true
    })
    return (products.length!=0)? products : new NotFoundError("Products")
  }

// async create(userId:string,ticket:{type:string,subject:string,description:string}):Promise<supTicket|void>{
    
    
    
    
 // }
}
