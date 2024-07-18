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
  
    const orgzs= await this.em.find(Orgz,{
      where:(userId!=undefined)?{owner:{id:userId}}:{},
      relations:{
        owner:true
      },
      cache:true
    })
    return (orgzs.length!=0)? orgzs : new NotFoundError("Products")
  }

async create(userId:number,orgz:{type:string,title:string,description:string}):Promise<Orgz|void>{
   let user= await services.User.id(userId) 
   if(user instanceof User) user = user as Owner

   const _orgz=await this.em.create(Orgz,{
      ...orgz
    })
   
   _orgz.owner=user
   return await this.em.save(Orgz,_orgz)
     
 }
  
  async createBranch(parentId:number,orgz:{type:string,title:string,description:string}):Promise<Orgz>
  {
    const parent=await this.em.findOneOrFail(Orgz,{
      where:{id:parentId},
      relations:["branches"]
    })
    const _orgz=await this.em.create(Branch,{
      ...orgz
    })
    parent.branches.push(_orgz)
    return await this.em.save(Orgz,parent)
  }
}
}
