import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, 
        OneToMany, TableInheritance ,ChildEntity,CreateDateColumn,
        UpdateDateColumn ,BeforeInsert, JoinColumn  } from "typeorm"
import { User} from "./";
import { genCode} from "../../helpers";

@ChildEntity()
export class Affiliate extends User {
    
    @Column({default:"marketer"})
    type:string

    @ManyToOne(()=>User)
    @JoinColumn([
    { name: "referedBy", referencedColumnName: "referralCode" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
    related:User
        
    @Colummn()
    referralCode:string

    @Colummn()
    referedBy:string

    @BeforeInstert()
    setCode(){
        this.code=genCode()
    }
}
