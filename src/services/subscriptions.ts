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
      where:(userId!=undefined)?{user:{id:userId}}:{},
      relations:{
        user:true,
        payments:true,
      },
      cache:true
    })
    return (subscriptions.length!=0)? subscriptions : new NotFoundError("Subscription")
  }

async createRenewlPayment(supscripId:number):Promise<Payment|void>{
   const payment=new Payment()
   let subscription= await this.em.findOneOrFail(Subscription,{
     where:{id:supscripId},
     relation:["user"]
   }) 
   const user=await this.em.findOneOrFail(Subscriber,{
     where:{id:subscription.user.id}
   }) 
   payment.renewal=true
   payment.user=user
   payment.amount=subscription.renewalAmount
   payment.subscription=subscription
   subscription.payments.push(payment)
   await this.em.save(Subscription,subscription)
   
   return payment
    
 }
}
