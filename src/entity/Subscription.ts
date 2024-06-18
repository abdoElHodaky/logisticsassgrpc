import { Entity,Column,ManyToOne,OneToMany,JoinColumn,JoinTable,
        PrimaryGeneratedColumn, CreateDateColumn,ManyToMany,
        UpdateDateColumn } from "typeorm"
import { Subscriber } from "./users/";
import { SubscribedProduct } from "./products/";
@Entity()
export class Subscription {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;

    @Column("int")
    SuserId:number

    @Column("int")
    SProductId:number

    @ManyToOne(()=>Subscriber,user=>user.subscrips)
    //@JoinColumn({name:"userId", referencedColumnName:"id" })
    user:Subscriber;
   
   // @ManyToOne(()=>SubscribedProduct,product=>product.subscrip)
   // @JoinColumn({name:"SProductId", referencedColumnName:"id" })
   // @JoinTable()
   // products:SubscribedProduct[]; 
   
    @CreateDateColumn({type:"date"})
    createdAt: Date;

    @UpdateDateColumn({type:"date"})
    updatedAt: Date;

    @Column({type:"date"})
    renewalAt: Date;
}
