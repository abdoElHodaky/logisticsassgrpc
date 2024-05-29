import { type } from "os"
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance ,ChildEntity,CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User} from "./"

@ChildEntity()
export class Related extends User {
    
   /* @Column({default:"author"})
    type:string

    */

}
