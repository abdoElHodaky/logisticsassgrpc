import { userInfo } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User";

@Entity()
export class Verification {
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column({nullable:true})
    type:string
    @Column({select:true,nullable:true})
    verify_code:string
    @ManyToOne(()=>User,user=>user.verifications) user:User;
}
