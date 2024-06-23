import {EventSubscriber ,EntitySubscriberInterface, UpdateEvent } from "typeorm"
import { Payment,User } from "../entity/";
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
        if(entity.amount==0 || entity.amount==undefined){
           entity.amount= entity.purchase.subTotal *1.14
         }
    }
}
