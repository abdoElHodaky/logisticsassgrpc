import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
import { PurshaseItem } from "./Purshase";
import { Article } from "./Article";
export type TypeAttachment=BaseEntity &{attachments:Attachment[]}
export type AttachedType=BaseEntity &{attached:BaseEntity}
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
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
    @ManyToOne(()=>TypeAttachment,attached=>attached.attachments) attached:AttachedType;
    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
   
}
