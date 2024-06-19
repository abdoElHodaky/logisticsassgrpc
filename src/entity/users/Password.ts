import { Entity,Column,ManyToOne,OneToMany,
        PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn,AfterInsert } from "typeorm"
import { User} from "./User";
@Entity()
export class Password {
  
  @PrimaryGeneratedColumn("increment")
  id:number;

  @Column({type:"varchar"})
  passphase:string;

  @CreateDateColumn({type:"date"})
  createdAt:Date

  @ManyToOne(()=>User,user=>user.passwords) user:User
/*
  @AfterInsert()
  changepass(){
    this.user?.passwordHash=this.passphase
  }
*/
}
