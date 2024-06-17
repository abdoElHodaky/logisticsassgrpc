import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column,
 OneToMany, TableInheritance ,JoinColumn,
        ChildEntity  } from "typeorm"
import { Subscription } from "../Subscription";
import {User} from "./User";
@ChildEntity()
export class Subscriber extends User {
    
   @Column({default:"User"})
   type:string

 /*  @Column("int")
   subscriberId:number */
 
   @OneToMany(()=>Subscription,subscrip=>subscrip.user)
   @JoinColumn({name:"id", referencedColumnName:"subscriberId" })
   subscrips?:Subscription[];

}
