import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Email {
    @Column({default:"test@test.com"})
    value:string

    @Column({default:false})
    verifed:boolean
}
