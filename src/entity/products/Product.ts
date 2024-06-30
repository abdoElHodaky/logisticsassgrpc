import { Entity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
        OneToMany, ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn,Index  } from "typeorm"
import { Supplier,Attachment,PurshaseItem, ProductCategory} from "../";
import { ProductAttachment } from "../attachments/";
import { Subscription} from "../Subscription";
import {AffiliateProduct} from "./"
import {ProductSpec} from "./ProductSpec";
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("int")
    price:number
        
    @CreateDateColumn()
    createdAt:Date
    
    @UpdateDateColumn()
    updatedAt:Date
    
    @OneToMany(()=>AffiliateProduct,affproduct=>affproduct.product) affiliated?: AffiliateProduct[];
    @OneToMany(()=>ProductAttachment,attachment=>attachment.attached) attachments:Attachment[];
    @ManyToOne(()=>Supplier,supplier=>supplier.products) supplier:Supplier;
    @OneToMany(()=>Product,sub=>sub.related) subproducts?:Product[];
    @OneToMany(()=>ProductSpec,spec=>spec.product) specs?:ProductSpec[];
    @ManyToOne(()=>Product,related=>related.subproducts) related?:Product
    @ManyToMany(()=>Subscription,subscrip=>subscrip.products)
    @JoinTable()
    subscriptions?:Subscription[]
   /* @ManyToOne(()=>ProductCategory,Cat=>Cat.entities)
     @JoinColumn([
    { name: "id", referencedColumnName: "productId" },
    { name: "categoryId", referencedColumnName: "id" }
    ])
    category:ProductCategory */
    @ManyToOne(()=>ProductCategory,entity=>entity.product) 
    @JoinTable([ { name: "ProductId", referencedColumnName: "id" },
  //  { name: "id", referencedColumnName: "categoryId" }]
    ])
    categories:ProductCategory[]
        
    @Index()
    @Column("int")
    categoryId:number
   
}
