import { BaseEntity} from "typeorm";
import { Attachment} from "./Attachment";

export class  TypeAttachment extends BaseEntity &{attachments:Attachment[]} {}
export class  AttachedType extends BaseEntity &{attached:TypeAttachment} {}
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
