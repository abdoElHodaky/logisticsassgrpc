import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, JoinColumn,
        ManyToMany,JoinTable,ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import {Affiliate} from "../users/";
import {Product} from "./Product";
@Entity()
export class AffiliateProduct {

        @PrimaryGeneratedColumn("increment")
        id: number 
        
        @ManyToOne(()=>Affiliate,affiliate=>affiliate.products) affiliate:Affiliate

        @ManyToOne(()=>Product, product=>product.affiliated) product: Product
}

