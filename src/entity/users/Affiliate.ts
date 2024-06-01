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

    @ManyToOne(()=>User,user=>user.affiliates)
  /*  @JoinColumn([
    { name: "referedBy", referencedColumnName: "referralCode" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])*/
    related:User
        
    @Column({default:"456",type:"varchar"})
    referralCode:string

    @Column({default:"456", type:"varchar"})
    referedBy:string

    @BeforeInsert()
    setCode(){
        this.referralCode=genCode()
    }
}
