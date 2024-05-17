import { BaseEntity} from "typeorm";
import { Attachment} from "./Attachment";

export class  TypeAttachment  {attachments:Attachment[]} 
export class  AttachedType  {attached:TypeAttachment} 
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
