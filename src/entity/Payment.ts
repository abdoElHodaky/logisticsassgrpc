import { Entity,Column,ManyToOne,BeforeUpdate,
        OneToOne,PrimaryGeneratedColumn
       } from "typeorm"
import { User,Address,Purshase } from "./";

export enum PaymentStatus{
    PAYMENT_DEFAULT="Default",
    PAYMENT_PENDING="Pending",
    PAYMENT_PAID="Paid"
}

@Entity()
export class Payment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;

    @Column(/*{type:'timestamptz'}*/)
    date: string;
    
    @Column({type: "varchar", nullable: true})
    status: PaymentStatus;

    @Column({type: "int"})
    amount: number;

    @Column({type: "varchar", nullable: true})
    currency: string;

    @Column(()=>Address)
    shipping: Address;
    
    @Column({type: "varchar", nullable: true})
    transR: string;

    @OneToOne(()=>Purshase,purchase=>purchase.payment) purchase:Purshase;
    @ManyToOne(()=>User,user=>user.payments) user:User;

}

@ChildEntity()
export class SubscriptionPayment extends Payment{
   @Column({type: "boolean"})
   renewal:boolean=true

   @ManyToOne(()=>Subscription,subscription=>subscription.payments) subscription:Subscription;

}
