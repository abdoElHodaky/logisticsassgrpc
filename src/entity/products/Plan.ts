import { Entity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
         CreateDateColumn, UpdateDateColumn,Index  } from "typeorm"

import { Product,Activated } from "../";

@Entity()
export class Plan extends Product {
  
  @PrimaryGeneratedColumn("increment")
  id:number
  
  @OneToOne(()=>Activated,activated=>activated.activatedPlan) client:Activated
}
