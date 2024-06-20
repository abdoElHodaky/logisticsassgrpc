import { type } from "os"
import { Entity, PrimaryGeneratedColumn, JoinColumn,
        JoinTable ,Column, OneToMany, ManyToOne,
        TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
//import { Email } from "./Email"
import { Owner,User,Address,OrgzAttachment} from "../"

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
    
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(()=>Owner,owner=>owner.orgzs) owner?:Owner
    @OneToMany(()=>OrgzAttachment,attachment=>attachment.attached) attachments?:OrgzAttachment
   
}
