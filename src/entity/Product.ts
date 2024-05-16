import { Entity ,Column,PrimaryGeneratedColumn, OneToMany, ChildEntity} from "typeorm"
import { User,Attachment} from "./";
import { AttachedType } from "./Attachment";
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("simple-json")
    specs:any
    
    @OneToMany(()=>AttachedType,attached=>attached.attached) attachments:Attachment[];
    
}
