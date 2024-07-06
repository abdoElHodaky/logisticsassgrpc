import { type } from "os"
import { Entity, PrimaryGeneratedColumn, JoinColumn,
        JoinTable ,Column, OneToMany, ManyToOne,
        TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
//import { Email } from "./Email"
import { Orgz} from "./"

@ChildEntity()
export class Branch extends Orgz{

 @Column({default:"branch"})
 type:string
        
 @ManyToOne(()=>Orgz,related=>related.branches) 
 related:Orgz
    
}

