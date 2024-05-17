import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
import { AttachedType} from "./Attached";
/*import { PurshaseItem } from "./Purshase";
import { Article } from "./Article";
export type TypeAttachment=BaseEntity &{attachments:Attachment[]}
export type AttachedType=BaseEntity &{attached:TypeAttachment}
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}*/
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
    @Column()
    forType:string
    @Column()/*
    forTypeId:number*/
    @ManyToOne(()=>AttachedType,attached=>attached?.attached.attachments) attached:AttachedType;
    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
   
}
