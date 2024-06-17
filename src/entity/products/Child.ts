import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Product } from "./Product";

@ChildEntity()
export class ChildProduct extends Product {

  @ManyToOne(()=>Product,parent=>parent.subs) parent:Product;
   
}
