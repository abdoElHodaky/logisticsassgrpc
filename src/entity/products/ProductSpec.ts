import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn,JoinColumn  } from "typeorm"
import { Product } from "./Product";

@Entity()
export class ProductSpec {

@PrimaryGeneratedColumn("increment")
id:number

@ManyToOne(()=>Product,product=>product.specs)
 
@Column("varchar")
name:string

@Column("simple-json")
value:any
        
}
