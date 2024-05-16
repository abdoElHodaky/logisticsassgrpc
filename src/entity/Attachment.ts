import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
import { PurshaseItem } from "./Purshase";
import { Article } from "./Article";
type T=PurshaseItem|Article
export enum AttachedEnity{
    ARTICLE=Article,
    ITEM=PurshaseItem
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

    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User;
    @ManyToOne<PurshaseItem|Article>(attachedTo=>attachedTo?.attachments) attachedTo:PurshaseItem|Article;
}
