import { Entity,Column,ManyToOne,OneToMany,JoinColumn,
        PrimaryGeneratedColumn, CreateDateColumn,
        UpdateDateColumn } from "typeorm"
import { Subscriber } from "./users/";
import { SubscribedProduct } from "./products/";
@Entity()
export class Subscription {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;

    @ManyToOne(()=>Subscriber,user=>user.subscrips)
    @JoinColumn({name:"subscriberId", referencedColumnName:"id" })
    user?:Subscriber;
    
    @OneToMany(()=>SubscribedProduct,product=>product.subscrip)
    @JoinColumn({name:"subscriberedPId", referencedColumnName:"id" })
    products?:SubscribedProduct[];
   
    @CreateDateColumn({type:"date"})
    createdAt: Date;

    @UpdateDateColumn({type:"date"})
    updatedAt: Date;

    @Column({type:"date"})
    renewalAt: Date;
}
