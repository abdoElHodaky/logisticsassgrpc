import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User} from "./";
import {Product} from "../products/"

@ChildEntity()
export class Supplier extends User {
    
    @Column({default:"Supplier"})
    type:string

    @OneToMany(()=>Product,product=>product.supplier) products: Product[];

}
