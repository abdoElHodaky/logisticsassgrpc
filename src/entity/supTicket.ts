import { Entity ,Column,PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User } from "./users/"

@Entity()
export class supTicket {
    
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    type: string

    @Column()
    subject: string

    @Column()
    description: string

    @ManyToOne(()=>User,user=>user.tickets) user:User
    @CreateDateColumn({type:"date"})
     createdAt: Date;

     @UpdateDateColumn({type:"date"})
     updatedAt: Date;

}
