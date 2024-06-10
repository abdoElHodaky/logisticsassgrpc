import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Supplier,Attachment,PurchasedItem} from "./";
import { ProductAttachment } from "./Attached";
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("simple-json")
    specs:any

    @CreateDateColumn({type:"date"})
    createdAt:Date
    
    @UpdateDateColumn({type:"date"})
    updatedAt:Date
    
    @OneToMany(()=>ProductAttachment,attachment=>attachment.attached) attachments:Attachment[];
    @ManyToOne(()=>Supplier,supplier=>supplier.products) supplier:Supplier;
    @OneToMany(()=>subProduct,subproduct=>subproduct.parent) subs:subProduct[];
    @OneToOne(()=>PurshasedItem,item=>item.product) item:PurshasedItem
   
}

@ChildEntity()
export class subProduct extends Product {
    @ManyToOne(()=>Product,product=>product.subs) parent:Product;
   
}
