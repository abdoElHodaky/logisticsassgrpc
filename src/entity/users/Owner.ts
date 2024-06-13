import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User} from "./";
import {Orgz} from "../"

@ChildEntity()
export class Owner extends User {
    
    @Column({default:"Owner"})
    type:string

    @OneToMany(()=>Orgz,orgz=>orgz.owner) orgz?: Orgz[];

}
