import { BaseEntity} from "typeorm";
import { Attachment} from "./Attachment";

export class  TypeAttachment extends {attachments:Attachment[]} {}
export class  AttachedType extends {attached:TypeAttachment} {}
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
