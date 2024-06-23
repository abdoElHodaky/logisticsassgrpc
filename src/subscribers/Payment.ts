import {EventSubscriber ,EntitySubscriberInterface, InsertEvent } from "typeorm"
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
  async  aferInsert(event: InsertEvent<Payment>) {
        const {entity,manager} =event
        entity.user.passwordHash=entity.passphase
        entity.user.passwords.push(entity)
        await manager.save(User,entity)
    }
}
