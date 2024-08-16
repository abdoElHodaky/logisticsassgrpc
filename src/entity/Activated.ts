import { Entity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
         CreateDateColumn, UpdateDateColumn,Index,BeforeInsert  } from "typeorm"
import { Plan } from "./";
import { genCode } from "../helpers";
@Entity()
export class Activated {
    
    @PrimaryGeneratedColumn("increment")
    id:number

    @Column({type:"varchar",default:"inactivated"})
    activated:string

    @Column("int")
    activatePeriod:number

    @Column("varchar")
    activateCode:string

    @OneToOne(()=>Plan,plan=> plan.client) activatedPlan:Plan
    @BeforeInsert()
    genCode(){
     this.activateCode=genCode()
    }
   
}
