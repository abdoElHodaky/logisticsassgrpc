import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "../users/";
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
    
    @CreateDateColumn()
    createdAt:Date
    
    @UpdateDateColumn()
    updatedAt:Date
    
    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
   
}
