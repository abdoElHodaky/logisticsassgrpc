<<<<<<< HEAD
import { Entity,Column,ManyToOne,PrimaryGeneratedColumn} from "typeorm"
import { User,Address } from "./";
=======
import { Entity,Column,ManyToOne,BeforeUpdate,
        OneToOne,PrimaryGeneratedColumn,ChildEntity
       } from "typeorm"
import { User,Address,Purshase,Subscription } from "./";

export enum PaymentStatus{
    PAYMENT_DEFAULT="Default",
    PAYMENT_PENDING="Pending",
    PAYMENT_PAID="Paid"
}
>>>>>>> mainrpc

@Entity()
export class Payment {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;

<<<<<<< HEAD
    @Column({type: "varchar"})
    date: string;
    
    @Column({type: "varchar", nullable: true})
    status: string;

    @Column({type: "varchar", nullable: true})
    amount: string;
=======
    @Column(/*{type:'timestamptz'}*/)
    date: string;
    
    @Column({type: "varchar", nullable: true})
    status: PaymentStatus;

    @Column({type: "int"})
    amount: number;
>>>>>>> mainrpc

    @Column({type: "varchar", nullable: true})
    currency: string;

    @Column(()=>Address)
    shipping: Address;
    
<<<<<<< HEAD
    @ManyToOne(()=>User,user=>user.payments) user:User;
=======
    @Column({type: "varchar", nullable: true})
    transR: string;

    @OneToOne(()=>Purshase,purchase=>purchase.payment) purchase:Purshase;
    @ManyToOne(()=>User,user=>user.payments) user:User;
   
    @Column({type: "boolean"})
    renewal:boolean

   @ManyToOne(()=>Subscription,subscription=>subscription.payments) subscription:Subscription;

>>>>>>> mainrpc
}
