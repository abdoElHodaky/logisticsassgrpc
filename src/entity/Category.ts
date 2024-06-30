import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn,ChildEntity } from "typeorm"
import { Product } from "./";
@Entity()
export class Category
{
   @PrimaryGeneratedColumn("increment")
   id:number

   @Column("varchar")
   name:string

   @Column("varchar")
   description:string

   @CreateDateColumn()
   createdAt:Date

   @UpdateDateColumn()
   updatedAt:Date

  /* @ManyToMany<T>(entity=>entity?.categories)
   @JoinTable()
   entities?:T[] */
}

@ChildEntity()
export class ProductCategory extends Category {
   @Column({type:"varchar",default:"Product"})
   readonly forType:string="Product"

   @ManyToOne(()=>Product,product=>product.categories) product:Product
   @OneToMany(()=>Product,entity=>entity.category) entities:Product[]
}
