import { Column, Entity, ManyToOne,
        PrimaryGeneratedColumn } from "typeorm"

import { genCode} from "../../helpers";

@Entity()
export class VerifyCode{
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
