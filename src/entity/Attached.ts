import { BaseEntity} from "typeorm";
import { Attachment} from "./Attachment";

export class  TypeAttachment  {
    public  attachments:Attachment[]
                              } 
export class  AttachedType  {
    public attached:TypeAttachment
                            } 
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
