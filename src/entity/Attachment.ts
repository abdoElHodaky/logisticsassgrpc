import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
import { PurshaseItem } from "./Purshase";
import { Article } from "./Article";
export type Attachedtype=BaseEntity &{attachments:Attachment[]}
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
    /*@Column()
    forType:T
    @Column()
    forTypeId:number*/
    @ManyToOne(()=>AttachedType,attached=>attached.attachments) attached:AttachedType;
    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
   
}
