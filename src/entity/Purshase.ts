import { Entity ,Column,PrimaryGeneratedColumn,AfterLoad,
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
        
    @Column("int")
    subTotal:number
        
    @OneToMany(()=>PurshaseItem, item=>item.purshase) items:PurshaseItem[]
    @ManyToOne(()=>User,user=>user.purchases) user:User;
    @OneToOne(()=>Payment,payment=>payment.purchase) payment:Payment

    @AfterLoad()
    setSubTotal(){
        if(this.items.length!=0){
          this.items.reduce((sum,item)=>{
           this.subTotal+=item?.product.price
           return sum
          })
        }
    }
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
