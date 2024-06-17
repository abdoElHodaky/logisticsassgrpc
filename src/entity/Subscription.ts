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

    @Column({ type: "int" })
    subscriberId: number;

    @Column({ type: "int" })
    subscriberedPId: number;

    /*@ManyToOne(()=>Subscriber,user=>user.subscrips)
    //@JoinColumn({name:"subscriberId", referencedColumnName:"id" })
    user:Subscriber;*/
    
   /* @ManyToOne(()=>SubscribedProduct,product=>product.subscrip)
   // @JoinColumn({name:"subscriberedPId", referencedColumnName:"id" })
   // @JoinTable()
    products:SubscribedProduct[]; */
   
    @CreateDateColumn({type:"date"})
    createdAt: Date;

    @UpdateDateColumn({type:"date"})
    updatedAt: Date;

    @Column({type:"date"})
    renewalAt: Date;
}
