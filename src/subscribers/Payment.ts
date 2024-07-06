import {EventSubscriber ,EntitySubscriberInterface, UpdateEvent,InsertEvent } from "typeorm"
import { Payment,User ,Subscription} from "../entity/";
import {PaymentStatus} from "../entity/Payment";
@EventSubscriber()
export class PaymentSubscriber implements EntitySubscriberInterface<Payment> {
    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return Payment
    }

    /**
     * Called before post insertion.
     */
  async  beforeUpdate(event: UpdateEvent<Payment>) {
        const {entity,manager} =event
        if(entity?.amount && entity?.renewal==false){
           entity.amount= entity.purchase.subTotal *1.14
         }
      else {
          
      }
    }
    
  async afterInsert(event:InsertEvent<Payment>){
     const momment=require("moment")
     const {entity,manager} =event
     entity.user?.payments.push(entity)
     if(entity.renewal==true && entity.status==PaymentStatus.PAYMENT_PAID)
     {
     entity.subscription.status="renewal"
     entity.subscription.renewalAt=momment()
     await manager.save(Subscription,entity?.subscription)
     }

    }


    
}
