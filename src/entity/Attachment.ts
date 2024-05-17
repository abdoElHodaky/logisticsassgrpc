import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
//import { AttachedType } from "./Attached";
@TableInheritance({column:{
    type:"varchar",
    name:"type"
}
})
@Entity()
export class Attachment {
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({default:""})
    title: string;
    @Column({default:""})
    description:string;
    @Column({default:""})
    thumbnail:string;
    @Column({default:""})
    source:string;
    
   // @ManyToOne(()=>AttachedType,attached=>attached.attachments) attached:AttachedType;
    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
   
}
