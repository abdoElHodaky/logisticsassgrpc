import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, JoinColumn,
        ManyToMany,JoinTable,ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import {Subscription} from "../Subscription";
import {Product} from "./Product";
@ChildEntity()
export class SubscribedProduct extends Product {
        
    @Column("int")
    SProductId:number

    @OneToMany(()=>Subscription,subscrip=>subscrip.products) 
    //@JoinColumn({name:"id", referencedColumnName:"SProductId" })
   
    subscrip:Subscription; 

        
   
}
