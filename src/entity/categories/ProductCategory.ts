import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn,ChildEntity,JoinColumn,
        OneToMany,ManyToOne,Index} from "typeorm"
import { Product } from "../";
import { Category } from "./"
@ChildEntity()
export class ProductCategory extends Category {
   @Column({type:"varchar",default:"Product"})
   readonly forType:string="Product"
     
   @ManyToOne(()=>Product,product=>product.categories)
   @JoinColumn([
    { name: "productId", referencedColumnName: "id" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
   product:Product
   @OneToMany(()=>Product,entity=>entity.category) 
   @JoinColumn([
    { name: "productId", referencedColumnName: "id" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
    entities:Product[]

    @Index()
    @Column({type:"int"})
    productId:number
    
}
