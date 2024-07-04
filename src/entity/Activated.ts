import { Entity} from "typeorm";

@Entity()
export class Activated {
    
    @Column({type:"varchar",default:"inactivated"})
    activated:string

    @Column("int")
    activatePeriod:number

    @Column("varchar")
    activateCode:string
}
