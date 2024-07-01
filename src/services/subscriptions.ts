import { _Data } from "./datasource";
import { Subscription,Subscriber , Payment} from "../entity/"
import { Error , NotFoundError } from "common-errors";
import { isNumeric } from "../helpers";
import { services} from "./enum";
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class SubscriptionService extends _Data {
  constructor (){
      super()
  }

  async all(userId?:number):Promise<Subscription[]|Error>
  {
  
    const subscriptions= await this.em.find(Subscription,{
      where:(userId!=undefined)?{subscriber:{id:userId}}:{},
      relations:{
        subscriber:true
      },
      cache:true
    })
    return (subscriptions.length!=0)? subscriptions : new NotFoundError("Subscription")
  }

async renew(id:number):Promise<Subscription|void>{
   let subscription= await this.em.findOneOrFail(Subscription,{
     where:{id:id},
     relation:["subscriber"]
   }) 
  

   const _orgz=await this.em.create(Orgz,{
      ...orgz
    })
   
   _orgz.owner=user
   return _orgz
    
    
    
 }
}
