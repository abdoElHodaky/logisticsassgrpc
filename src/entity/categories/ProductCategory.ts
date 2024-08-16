import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn,ChildEntity,JoinColumn,
        OneToMany,ManyToOne,Index} from "typeorm"
import { Product } from "../";
import { Category } from "./"
@Entity()
export class ProductCategory {
   
   @PrimaryGeneratedColumn("increment")
   id:number
        
   @Column({type:"varchar",default:"Product"})
   readonly forType:string="Product"

   @Column("varchar")
   name:string
        
   @Column("varchar")
   description:string
        
   @OneToMany(()=>Product,product=>product.categories)
   @JoinColumn([ 
   { name: "ProductId", referencedColumnName: "id" },
    //{ name: "id", referencedColumnName: "categoryId" }
   ])
   product:Product


  @ManyToOne(()=>Category,category=>category.categories) 
   @JoinColumn([
   // { name: "ProductId", referencedColumnName: "id" },
    { name: "categoryId", referencedColumnName: "id" }
    ])
    category:Category

    @Index()
    @Column({type:"int"})
    productId:number

    @Index()
    @Column({type:"int"})
    categoryId:number
    
}
