import {Entity, ChildEntity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
         CreateDateColumn, UpdateDateColumn,Index  } from "typeorm"

import {Activated } from "../";
import { Product } from "./Product";

@Entity()
export class Plan {
  
  @PrimaryGeneratedColumn("increment")
  id:number
  
  @OneToOne(()=>Activated,activated=>activated.activatedPlan) client:Activated
}
