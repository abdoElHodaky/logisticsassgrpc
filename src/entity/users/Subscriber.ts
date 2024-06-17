import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column,
 OneToMany, TableInheritance ,
        ChildEntity  } from "typeorm"
import { Subscription } from "./";

@ChildEntity()
export class Subscribe extends User {
    
   @Column({default:"User"})
   type:string

   @OneToMany(()=>Subscription,subscrip=>subscrip.user) subscrips ?: Subscription[];

}
