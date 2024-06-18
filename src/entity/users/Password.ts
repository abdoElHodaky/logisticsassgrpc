import { Entity,Column,ManyToOne,OneToMany,
        PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User} from "./User";
@Entity()
export class Password {
  
  @PrimaryGeneratedColumn("increment")
  id:number;

  @Column({type:"varchar"})
  passphase:string;

  @CreateDateColumn({type:"date"})
  createdAt:Date

  @ManyToOne(()=>User,user.passwords) user:User
}
