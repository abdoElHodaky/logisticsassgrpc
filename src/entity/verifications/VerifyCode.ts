import { Column, Entity, ManyToOne,
        PrimaryGeneratedColumn,BeforeInsert } from "typeorm"
import { Verification} from "./Verification";
import { genCode} from "../../helpers";

@Entity()
export class VerifyCode{
   @PrimaryGeneratedColumn("increment")
   id: number 
        
   @Column({type:"varchar"})
   code:string
  
   @Column({type:"date"})
   expiresAt:Date
  
   @ManyToOne(()=>Verification,verification=>verification.verify_codes)verification:Verification
   @BeforeInsert()
   setCode(){
        this.code=genCode()
    }
}
