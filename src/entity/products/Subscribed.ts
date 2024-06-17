import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"

@ChildEntity()
export class SubscribedProduct extends Product {
   // @ManyToOne(()=>Product,product=>product.subs) parent:Product;
   
}
