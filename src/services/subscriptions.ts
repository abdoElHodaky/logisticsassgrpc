import { _Data } from "./datasource";
import { Subscription,Subscriber ,User, Payment} from "../entity/"
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

async createRenewPayment(id:number):Promise<Payment|void>{
   const payment=new Payment()
   let subscription= await this.em.findOneOrFail(Subscription,{
     where:{id:id},
     relation:["subscriber"]
   }) 
   const user=await this.em.findOneOrFail(Subscriber,{
     where:{id:subscription.subscriber.id}
   }) 
   payment.renewal=true
   payment.user=user as User
   payment.amount=subscription.renewalAmount
   payment.subscription=subscription
   subscriptions.payments.push(payment)
   await this.em.save(Subscription,subscription)
   
   return payment
    
    
    
 }
}
