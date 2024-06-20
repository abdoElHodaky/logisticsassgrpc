import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn,JoinColumn  } from "typeorm"
//import { Product } from "./Product";

@Entity()
export class ProductSpec {

 /*   @ManyToOne(()=>Product,related=>related.subproducts)
    @JoinColumn([
    { name: "relatedId", referencedColumnName: "id" },
    {} ])
    related:Product */
@Column("varchar")
name:string

@Column("simple-json")
value:any
        
}
