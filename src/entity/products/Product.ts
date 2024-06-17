import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Supplier,Attachment,PurshaseItem} from "../";
import { ProductAttachment } from "../Attached";
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
    @OneToMany(()=>Product,sub=>sub.parent) subs?:Product[];
    @ManyToOne(()=>Product,parent=>parent.subs) parent?:Product;
   // @OneToOne(()=>PurshaseItem,purshased=>purshased.product) purshased:PurshaseItem
   
}
