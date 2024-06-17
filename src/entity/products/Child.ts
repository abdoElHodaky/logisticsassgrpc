import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, 
        ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn,JoinColumn  } from "typeorm"
import { Product } from "./Product";

@ChildEntity()
export class ChildProduct extends Product {

    @ManyToOne(()=>Product,related=>related.subproducts)
    @JoinColumn([
    { name: "relatedId", referencedColumnName: "id" },
    {} ])
    related:Product
}
