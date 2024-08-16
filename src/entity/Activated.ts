import { Entity ,Column,PrimaryGeneratedColumn,OneToOne,JoinColumn,ManyToMany,JoinTable,
         CreateDateColumn, UpdateDateColumn,Index  } from "typeorm"
import { Plan } from "./";
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
}
