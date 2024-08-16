import { type } from "os"
import { Entity, PrimaryGeneratedColumn, JoinColumn, JoinTable ,Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { Email } from "./Email"
import { supTicket,Article,Attachment,
        Address,Verification,Payment ,
        Purshase,Affiliate,Activated} from "../"
import { Password} from "./Password";
@Entity()
@TableInheritance({column:{type:"varchar",name:"type"}})
//@TableInheritance({column:{type:"varchar",name:"referralCode"}})
//@TableInheritance({column:{type:"varchar",name:"referedBy"}})

export class User {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

     @Column({nullable:false,default:29808,select:true})
    IDcardNumber: number

    @Column({type: "varchar" ,nullable:true})
    username: string;

    @Column({type: "varchar", nullable:true, select:true})
    passwordHash: string

    @Column(()=>Email)
    email:Email
    
    @Column(()=>Address)
    address:Address
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
    
    @OneToMany(()=>supTicket,ticket=>ticket.user) tickets:supTicket[]
    @OneToMany(()=>Verification,verification=>verification.user) verifications:Verification[];
    @OneToMany(()=>Attachment,media=>media.uploader) media:Attachment[]
    @OneToMany(()=>Payment,payment=>payment.user) payments:Payment[]
    @OneToMany(()=>Purshase,purchase=>purchase.user) purchases:Purshase[]
    @OneToMany(()=>Affiliate,affiliates=>affiliates.related)
    @JoinColumn([
    { name: "referedBy", referencedColumnName: "referralCode" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
    affiliates:Affiliate[]
    @OneToMany(()=>Password,password=>password.user) passwords:Password[]
   
    @Column(()=>Activated)
    activated?:Activated
}

/*@Entity()
export class Activated {
    
    @Column({type:"varchar",default:"inactivated"})
    activated:string

    @Column("int")
    activatePeriod:number

    @Column("varchar")
    activateCode:string
}
*/
