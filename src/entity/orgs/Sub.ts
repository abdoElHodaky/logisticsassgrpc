import { type } from "os"
import { Entity, PrimaryGeneratedColumn, JoinColumn,
        JoinTable ,Column, OneToMany, ManyToOne,
        TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
//import { Email } from "./Email"
import { Orgz} from "./"

@ChildEntity()
export class subOrgz extends Orgz{

 
 @ManyToOne(()=>Orgz,orgz=>orgz.subs) 
 @JoinColumn({ name: "relatedId", referencedColumnName: "id" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
 parent:Orgz
    
}

