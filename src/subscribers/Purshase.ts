import {EventSubscriber ,EntitySubscriberInterface,
 InsertEvent } from "typeorm"
import { Purshase,User } from "../entity/";
@EventSubscriber()
export class PurshaseSubscriber implements EntitySubscriberInterface<Purshase> {
    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return Purshase
    }

    /**
     * Called before post insertion.
     */
  async  aferInsert(event: InsertEvent<Purshase>) {
        const {entity,manager} =event
        //if(entity.items.length!=0 && entity.subTotal==0){
          entity.items.reduce((acc:any,item:any)=>{
           entity.subTotal+=item?.product.price
           return acc
          })
          await manager.save(Purshase,entity)
       // }
        
    }
}
