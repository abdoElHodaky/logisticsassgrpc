import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, 
        OneToMany, TableInheritance ,ChildEntity,CreateDateColumn,
        UpdateDateColumn ,BeforeInsert } from "typeorm"
import { User} from "./";
import { genCode} from "../../helpers";

@ChildEntity()
export class Affiliate extends User {
    /*
    @Column({default:"marketer"})
    type:string

    @ManyToOne(()=>User,referedBy=>referedBy.referals) referedBy:User
    */
    @Colummn()
    referralCode:string

    @Colummn()
    referedBy:string

    @BeforeInstert()
    setCode(){
        this.code=genCode()
    }
}
