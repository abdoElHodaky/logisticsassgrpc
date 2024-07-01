import { Entity,Column,ManyToOne,OneToMany,JoinColumn,JoinTable,
        PrimaryGeneratedColumn, CreateDateColumn,ManyToMany,
        UpdateDateColumn } from "typeorm"
import { Subscriber,Payment,Product,SubscriptionPayment } from "./";
@Entity()
export class Subscription {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;
    @Column("int")
    renewalAmount:number
        
   /* @Column("int")
    SuserId:number

    @Column("int")
    SProductId:number
    */

    @ManyToOne(()=>Subscriber,user=>user.subscrips)
    //@JoinColumn({name:"userId", referencedColumnName:"id" })
    user:Subscriber;
   
    @ManyToMany(()=>Product,product=>product.subscriptions)
   // @JoinColumn({name:"SProductId", referencedColumnName:"id" })
    @JoinTable()
    products:Product[]; 
   
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({type:"date"})
    renewalAt: Date;

    @OneToMany(()=>SubscriptionPayment,subspay=>subspay.subscription) payments:Payment[]
}
