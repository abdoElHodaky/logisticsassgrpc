import { _Data } from "./datasource";
import { Product ,User } from "../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ProductService extends _Data {
  constructor (){
      super()
  }

  async all():Promise<Product[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Product,{
      relations:{
        user:true
      },
      cache:true
    })
  }

// async create(userId:string,ticket:{type:string,subject:string,description:string}):Promise<supTicket|void>{
    
    
    
    
 // }
}
