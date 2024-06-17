import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"

import { Product } from "./Product"

@ChildEntity()
export ChildProduct extends Product{

  @ManyToOne(()=>Product,(parent:Product)=>parent.subs) parent:Product;
   
}
