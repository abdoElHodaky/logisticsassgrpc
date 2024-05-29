import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User} from "./"

@ChildEntity()
export class Affiliate extends User {
    /*
    @Column({default:"marketer"})
    type:string

    @ManyToOne(()=>User,referedBy=>referedBy.referals) referedBy:User
    */
}
