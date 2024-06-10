import { Entity ,Column,PrimaryGeneratedColumn
        ,OneToMany ,OneToOne,ManyToOne ,JoinColumn
        ,ChildEntity} from "typeorm"
//import { User} from "./";
//import { Payment } from "./";
import { Attachment,User,Payment,Product } from "./";
@Entity()
//@ChildEntity()
export class Purshase {
    @PrimaryGeneratedColumn("increment")
    id: number;
   
    
    @OneToMany(()=>PurshaseItem, item=>item.purshase) items:PurshaseItem[]
    @ManyToOne(()=>User,user=>user.purchases) user:User;
    @OneToOne(()=>Payment,payment=>payment.purchase) payment:Payment
}

@Entity()
//@ChildEntity()
export class PurshaseItem {
    @PrimaryGeneratedColumn("increment")
    id: number;
    
    @Column("simple-json")
    props:any
    
   @OneToOne(()=>Product) 
   @JoinColumn()
   product:Product
    
    @ManyToOne(()=>Purshase,purshase=>purshase.items) purshase:Purshase;
}
