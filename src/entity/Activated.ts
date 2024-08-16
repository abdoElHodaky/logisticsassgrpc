import { Entity,Column,OneToOne} from "typeorm";
import { Plan } from "./";
@Entity()
export class Activated {
    
    @Column({type:"varchar",default:"inactivated"})
    activated:string

    @Column("int")
    activatePeriod:number

    @Column("varchar")
    activateCode:string

    @OneToOne(()=>Plan,plan=> plan.client) activatedPlan:Plan
}
