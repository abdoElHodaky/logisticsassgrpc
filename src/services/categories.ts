import { _Data } from "./datasource";
import { Category,User } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { services} from "./enum";
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class CategoryService extends _Data {
  constructor (){
      super()
  }

  async all():Promise<Category[]|Error>
  {
  
    const categories= await this.em.find(Category,{
     // where:(userId!=undefined)?{owner:{id:userId}}:{},
      relations:{
        owner:true
      },
      cache:true
    })
    return (categories.length!=0)? categories : new NotFoundError("Category")
  }

async create(category:{name:string,description:string}):Promise<Category|void>{
   
   const _orgz=await this.em.create(Category,{
      ...category
    })
   
   //_orgz.owner=user
   return _orgz
    
    
    
 }
}
