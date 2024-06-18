import { userInfo } from "os";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./users/";
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
    
    @Column({select:true,nullable:true})
    verify_code:string;
    
    @ManyToOne(()=>User,user=>user.verifications) user:User;
}
