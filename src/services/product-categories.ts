import { _Data } from "./datasource";
import { Category,User ,ProductCategory} from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { services} from "./enum";
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ProductCategoryService extends _Data {
  constructor (){
      super()
  }

  async all(parentId?:number):Promise<ProductCategory[]|Error>
  {
  
    const categories= await this.em.find(ProductCategory,{
      where:(parentId!=undefined)?{category:{id:parentId}}:{},
      relations:{
        category:true
      },
      cache:true
    })
    return (categories.length!=0)? categories : new NotFoundError("Category")
  }

async create(category:{name:string,description:string}):Promise<ProductCategory|void>{
   
   const _category=await this.em.create(ProductCategory,{
      ...category
    })
   
   //_orgz.owner=user
   return await this.em.save(ProductCategory,_category)
 }
async createSub(parentId:number,category:{name:string,description:string}):Promise<ProductCategory>
  {
    const parent=await this.em.findOneOrFail(Category,{
      where:{id:parentId},
      relations:["categories"]
    })
    const _category=await this.em.create(ProductCategory,{
      ...category
    })
   // await this.em.save(Category,parent)
    parent.categories.push(_category)
    return await this.em.save(ProductCategory,_category)
  }
}
