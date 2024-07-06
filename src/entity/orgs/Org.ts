import { type } from "os"
import { Entity, PrimaryGeneratedColumn, JoinColumn,
        JoinTable ,Column, OneToMany, ManyToOne,
        TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
//import { Branch } from "../"
import { Owner,User,Address,OrgzAttachment,Branch} from "../"

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
    @OneToMany(()=>Branch,branches=>branches.related) 
    branches:Branch[]
}


/*@ChildEntity()
export class subOrgz extends Orgz{

 @Column({default:"branch"})
 type:string
        
 @ManyToOne(()=>Orgz,orgz=>orgz.subs) 
 @JoinColumn([{ name: "relatedId", referencedColumnName: "id" },
    //{ name: "locale_id", referencedColumnName: "locale_id" }
    ])
 parent:Orgz
    
}
*/
