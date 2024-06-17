import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column,
 ManyToMany,JoinTable, TableInheritance ,
        ChildEntity  } from "typeorm"
import { SubscribedProduct } from "./";

@ChildEntity()
export class Subscribe extends User {
    
   @Column({default:"User"})
   type:string

   @ManyToMany(()=>SubscribedProduct)
   @JoinTable()
   products ?: SubscribedProduct[];

}
