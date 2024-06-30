import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn,ChildEntity,JoinColumn,
        OneToMany,ManyToOne,Index} from "typeorm"
import { Product } from "../";
import { Category } from "./"
@ChildEntity()
export class ProductCategory extends Category {
   @Column({type:"varchar",default:"Product"})
   readonly forType:string="Product"
     
   @ManyToMany(()=>Product,product=>product.categories)
   @JoinTable({
   joinColumns :[ { name: "ProductId", referencedColumnName: "id" },
    { name: "id", referencedColumnName: "categoryId" }]
    })
   product:Product
  /* @OneToMany(()=>Product,entity=>entity.category) 
   @JoinColumn([
    { name: "ProductId", referencedColumnName: "id" },
    { name: "id", referencedColumnName: "categoryId" }
    ])
    entities:Product[]
*/
    @Index()
    @Column({type:"int"})
    productId:number
    
}
