import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, Index,
        OneToMany,ManyToOne, TableInheritance ,ChildEntity,CreateDateColumn,
        UpdateDateColumn ,BeforeInsert, JoinColumn ,JoinTable } from "typeorm"
import { User} from "./";
import { AffiliateProduct} from "../products/";
import { genCode} from "../../helpers";

@ChildEntity()
export class Affiliate extends User {
    
    @Column({default:"marketer"})
    type:string

    @OneToMany(()=>AffiliateProduct, product=>product.affiliate)
    products:AffiliateProduct[]

    @ManyToOne(()=>User,user=>user.affiliates)
    @JoinColumn([
    { name: "referedBy", referencedColumnName: "referralCode" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
    related:User
        
    @Index()
    @Column({default:"456",type:"varchar"})
    referralCode:string
    
    @Index()
    @Column({default:"456", type:"varchar"})
    referedBy:string

    @BeforeInsert()
    setCode(){
        this.referralCode=genCode()
    }
}
