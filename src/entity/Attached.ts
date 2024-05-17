import { ChildEntity} from "typeorm";
import { Attachment} from "./Attachment";
import { Product} from "./Product";
@ChildEntity()
export class  ProductAttachment extends Attachment {
    
    @ManyToOne(()=>Product,attached=>attached.attachments) attached:Product;
   
} 
export enum AttachedEnity{
    ARTICLE="Article",
    ITEM="PurshaseItem"
}
