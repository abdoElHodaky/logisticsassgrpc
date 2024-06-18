import { Entity,Column,ManyToOne,OneToMany,
        PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Password {
  
  @PrimaryGeneratedColumn("increment")
  id:number;

  @Column({type:"varchar"})
  passphase:string;
}
