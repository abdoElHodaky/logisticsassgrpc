import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, 
        OneToMany,ManyToOne, TableInheritance ,ChildEntity,CreateDateColumn,
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
        
    @Column({nullable:true,type:"varchar"})
    referralCode:string

    @Column({nullable:true, type:"varchar"})
    referedBy:string

    @BeforeInsert()
    setCode(){
        this.referralCode=genCode()
    }
}
