import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn,ChildEntity,
        OneToMany,ManyToOne} from "typeorm"
import { Product } from "../";
import { Category } from "./"
@ChildEntity()
export class ProductCategory extends Category {
   @Column({type:"varchar",default:"Product"})
   readonly forType:string="Product"

   @ManyToOne(()=>Product,product=>product.categories) product:Product
   @OneToMany(()=>Product,entity=>entity.category) entities:Product[]
}
