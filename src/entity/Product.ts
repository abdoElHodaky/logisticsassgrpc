import { Entity ,Column,PrimaryGeneratedColumn, OneToMany, ChildEntity, CreateDateColumn, UpdateDateColumn  } from "typeorm"
import { User,Attachment} from "./";
import { ProductAttachment } from "./Attached";
@Entity()
//@ChildEntity()
export class Product {
    @PrimaryGeneratedColumn("increment")
    id:number 

    @Column("simple-json")
    specs:any

    @CreateDateColumn({type:"date"})
    createdAt:Date
    
    @UpdateDateColumn({type:"date"})
    updatedAt:Date
    
    @OneToMany(()=>ProductAttachment,attachment=>attachment.attached) attachments:Attachment[];
    
}
