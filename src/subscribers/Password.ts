import {EventSubscriber ,EntitySubscriberInterface, InsertEvent } from "typeorm"
import { Password,User } from "../entity/";
@EventSubscriber()
export class PasswordSubscriber implements EntitySubscriberInterface<Password> {
    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return Password
    }

    /**
     * Called before post insertion.
     */
  async  aferInsert(event: InsertEvent<Password>) {
        const {entity,manager} =event
        entity.user?.passwordHash=entity.passphase
        await manager.save(User,entity)
    }
}
