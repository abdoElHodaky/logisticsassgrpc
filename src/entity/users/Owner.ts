import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User} from "./";
import {Org} from "../"

@ChildEntity()
export class Owner extends User {
    
    @Column({default:"Owner"})
    type:string

   // @OneToMany(()=>Product,product=>product.supplier) products: Product[];

}
