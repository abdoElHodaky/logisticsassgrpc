import { BaseEntity} from "typeorm";
import { Attachment} from "./Attachment";

export type TypeAttachment=BaseEntity &{attachments:Attachment[]}
export type AttachedType=BaseEntity &{attached:TypeAttachment}
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
