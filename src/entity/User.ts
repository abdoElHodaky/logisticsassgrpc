import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Email } from "./Email"
import { supTicket } from "./supTicket"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @Column({default:2980865431210,select:false})
    IDcardNumber: number

    @Column({type: "varchar",nullable:true })
    username: string;

    @Column({type: "varchar", nullable: true,select:false})
    passwordHash: string

    @Column(()=>Email)
    email:Email

    @OneToMany(()=>supTicket,ticket=>ticket.user) tickets:supTicket[]


}
