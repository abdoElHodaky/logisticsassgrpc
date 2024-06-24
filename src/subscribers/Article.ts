import {EventSubscriber ,EntitySubscriberInterface, UpdateEvent,InsertEvent } from "typeorm"
import { Article,Author } from "../entity/";
@EventSubscriber()
export class ArticleSubscriber implements EntitySubscriberInterface<Article> {
    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return Article
    }

    /**
     * Called before post insertion.
     */
  async  beforeUpdate(event: UpdateEvent<Article>) {
      /*  const {entity,manager} =event
        if(entity?.amount){
           entity.amount= entity.purchase.subTotal *1.14
         } */
    }
    
  async afterInsert(event:InsertEvent<Article>){
     const {entity,manager} =event
     entity.author?.articles.push(entity)
     await manager.save(Author,entity.author)

    }


    
}
