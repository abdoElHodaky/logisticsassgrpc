import { _Data } from "./datasource";
import { Orgz ,Owner,User } from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { services} from "./enum";
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class OrgzService extends _Data {
  constructor (){
      super()
  }

  async all(userId?:number):Promise<Orgz[]|Error>
  {
  
    const orgzs= await this.datasource.manager.find(Orgz,{
      where:(userId!=undefined)?{owner:{id:userId}}:{},
      relations:{
        owner:true
      },
      cache:true
    })
    return (orgzs.length!=0)? orgzs : new NotFoundError("Products")
  }

async create(userId:string,orgz:{type:string,title:string,description:string}):Promise<Orgz|void>{
   let user= await services.User.id(userId) 
   if(user instanceof User) user = user as Owner

   const _orgz=await this.datasource.manger.create(Orgz,{
      ...orgz
    })
   
   _orgz.owner=user
   return _orgz
    
    
    
 }
}
