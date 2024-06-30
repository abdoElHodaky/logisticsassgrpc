import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn,ChildEntity } from "typeorm"
import { Product ,Category} from "../";
@ChildEntity()
export class ProductCategory extends Category {
   @Column({type:"varchar",default:"Product"})
   readonly forType:string="Product"

   @ManyToOne(()=>Product,product=>product.categories) product:Product
   @OneToMany(()=>Product,entity=>entity.category) entities:Product[]
}
