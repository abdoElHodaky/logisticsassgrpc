import { Entity} from "typeorm";
import { Attachment} from "./Attachment";

export class  TypeAttachment  { } 
@Entity()
export class  AttachedType  { attachments:Attachment[]} 
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
