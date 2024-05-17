import { BaseEntity} from "typeorm";
//import { Attachment} from "./Attachment";

export class  TypeAttachment  { } 
export class  AttachedType  {public  attachments:Array<any> } 
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
