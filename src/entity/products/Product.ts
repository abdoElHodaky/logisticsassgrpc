import { Entity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
        OneToMany, ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Supplier,Attachment,PurshaseItem} from "../";
import { ProductAttachment } from "../attachments/";
import { Subscription} from "../Subscription";
import {AffiliateProduct} from "./"
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("simple-json")
    specs:any

    @Column("int")
    price:number
        
    @CreateDateColumn({type:"date"})
    createdAt:Date
    
    @UpdateDateColumn({type:"date"})
    updatedAt:Date
    
    @OneToMany(()=>AffiliateProduct,affproduct=>affproduct.product) affiliated?: AffiliateProduct[];
    @OneToMany(()=>ProductAttachment,attachment=>attachment.attached) attachments:Attachment[];
    @ManyToOne(()=>Supplier,supplier=>supplier.products) supplier:Supplier;
    @OneToMany(()=>Product,sub=>sub.related) subproducts?:Product[];
    @ManyToOne(()=>Product,related=>related.subproducts) related?:Product
    @ManyToMany(()=>Subscription,subscrip=>subscrip.products)
    @JoinTable()
    subscriptions?:Subscription[]
}

/*@ChildEntity()
export class ChildProduct extends Product {

    @ManyToOne(()=>Product,related=>related.subproducts)
    @JoinColumn([
    { name: "relatedId", referencedColumnName: "id" },
    {} ])
    related?:Product
}
*/
