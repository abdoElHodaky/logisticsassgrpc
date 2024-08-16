import {Entity, ChildEntity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
         CreateDateColumn, UpdateDateColumn,Index  } from "typeorm"

import {Activated } from "../";
import { Product } from "./Product";

@ChildEntity()
export class Plan extends Product {
  
  @PrimaryGeneratedColumn("increment")
  id:number
  
  @OneToOne(()=>Activated,activated=>activated.activatedPlan) client:Activated
}
