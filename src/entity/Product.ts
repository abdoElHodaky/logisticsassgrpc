import { Entity ,Column,PrimaryGeneratedColumn, OneToMany, ChildEntity} from "typeorm"
import { User,Attachment} from "./";
import { ProductAttachment } from "./Attached";
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("simple-json")
    specs:any
    
    @OneToMany(()=>ProductAttachment,attachment=>attachment.attached) attachments:Attachment[];
    
}
