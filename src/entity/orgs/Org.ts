import { type } from "os"
import { Entity, PrimaryGeneratedColumn, JoinColumn, JoinTable ,Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
//import { Email } from "./Email"
import { User,Address} from "../"

@Entity()
@TableInheritance({column:{type:"varchar",name:"type"}})
//@TableInheritance({column:{type:"varchar",name:"referralCode"}})
//@TableInheritance({column:{type:"varchar",name:"referedBy"}})

export class Orgz {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    email: string

    @Column()
    phone: string
    
    @Column(()=>Address)
    address:Address
    
    @CreateDateColumn({type:"date"})
    createdAt: Date;

    @UpdateDateColumn({type:"date"})
    updatedAt: Date;
    
   /* @OneToMany(()=>supTicket,ticket=>ticket.user) tickets:supTicket[]
    @OneToMany(()=>Verification,verification=>verification.user) verifications:Verification[];
    @OneToMany(()=>Attachment,media=>media.uploader) media:Attachment[]
    @OneToMany(()=>Payment,payment=>payment.user) payments:Payment[]
    @OneToMany(()=>Purshase,purchase=>purchase.user) purchases:Purshase[]
    @OneToMany(()=>Affiliate,affiliates=>affiliates.related)
    @JoinColumn([
    { name: "referedBy", referencedColumnName: "referralCode" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
    affiliates:Affiliate[]*/
   
}
