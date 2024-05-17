import { BaseEntity} from "typeorm";
//import { Attachment} from "./Attachment";

export class  TypeAttachment  {
    public  attachments:Array<any>
                              } 
export class  AttachedType  {
    public attached:TypeAttachment
                            } 
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
