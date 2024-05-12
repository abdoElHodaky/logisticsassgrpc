import { Entity ,Column,PrimaryGeneratedColumn, ManyToOne,OneToOne ,ChildEntity} from "typeorm"
import { User} from "./";
import { Payment } from "./";

@Entity()
//@ChildEntity()
export class Purshase {
    
   


 //   @ManyToOne(()=>User,purchase=>purchase.user) user:User;

}
