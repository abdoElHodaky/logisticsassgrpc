import { Entity ,Column,PrimaryGeneratedColumn, ManyToOne} from "typeorm"
import { User } from "./User"

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

    @ManyToOne(type=>User,user=>user.tickets) user:User

}
