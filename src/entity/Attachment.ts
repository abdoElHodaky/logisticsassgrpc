import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
//import { AttachedType } from "./Attached";
@TableInheritance({column:{
    type:"varchar",
    name:"type"
}
})
 @TableInheritance({column:{
    type:"varchar",
    name:"forType"
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
    
    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
   
}
