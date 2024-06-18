import { userInfo } from "os";
import { Column, Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../users/";
import { VerifyCode} from "./VerifyCode";

export enum VerfyType {
    EMAIL="email",
    PHONE="phone",
    PRODUCT_TYPE_ENTITY,
}
@Entity()
export class Verification {
    @PrimaryGeneratedColumn("increment")
    id:number;
    
    @Column({nullable:true})
    type:VerfyType;
    
    @OneToMany(()=>VerifyCode,code=>code.verification) verify_codes:VerifyCode[];
    
    @ManyToOne(()=>User,user=>user.verifications) user:User;
}
