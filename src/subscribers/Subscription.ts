import {EventSubscriber ,EntitySubscriberInterface, UpdateEvent,InsertEvent } from "typeorm"
import { Subscription,User } from "../entity/";
@EventSubscriber()
export class SubscriptionSubscriber implements EntitySubscriberInterface<Subscription> {
    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return Subscription
    }

    /**
     * Called before post insertion.
     */
  async  beforeUpdate(event: UpdateEvent<Subscription>) {
      /*  const {entity,manager} =event
        if(entity?.amount){
           entity.amount= entity.purchase.subTotal *1.14
         } */
    }
    
  async afterInsert(event:InsertEvent<Subscription>){
     const {entity,manager} =event
     entity?.subscriber?.subscriptions.push(entity)
    // await manager.save(User,entity.user)

    }


    
}
