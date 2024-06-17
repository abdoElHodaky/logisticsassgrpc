import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import {Subscription} from "./Subscription";
@ChildEntity()
export class SubscribedProduct extends Product {
    @ManyToOne(()=>Subscription,subscrip=>subscrip.products) subscrip?:Subscription;
   
}
