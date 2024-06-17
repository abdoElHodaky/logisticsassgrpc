import { Entity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,
        OneToMany, ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Supplier,Attachment,PurshaseItem} from "../";
import { ProductAttachment } from "../attachments/";
//import { ChildProduct} from "./Child";
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
    @OneToMany(()=>Product,sub=>sub.related) 
  /*  @JoinColumn([
    { name: "id", referencedColumnName: "relatedId" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])*/
    subproducts?:Product[];
    @ManyToOne(()=>Product,related=>related.subproducts)
    @JoinColumn([
    { name: "relatedId", referencedColumnName: "id" },
    {} ])
    related?:Product
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
