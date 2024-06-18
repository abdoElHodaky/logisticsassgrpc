import { Entity ,Column,PrimaryGeneratedColumn,OneToOne, OneToMany, JoinColumn,
        ManyToMany,JoinTable,ManyToOne, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import {Affiliate} from "../users/";
import {Product} from "./Product";
@ChildEntity()
export class AffiliateProduct extends Product {
        
}

