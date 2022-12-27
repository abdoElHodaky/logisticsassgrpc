import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Email {
    @PrimaryGeneratedColumn("increment")
    id: number

    @Column({default:"test@test.com"})
    value:string

    @Column({default:false})
    verifed:boolean
}
