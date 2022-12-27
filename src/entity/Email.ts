import { Column, Entity } from "typeorm"

@Entity()
export class Email {
    @Column({default:"test@test.com"})
    value:string

    @Column({default:false})
    verifed:boolean
}
