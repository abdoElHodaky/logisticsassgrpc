import { ChildEntity,ManyToOne,Column} from "typeorm";
import { Attachment} from "./Attachment";
import { Product} from "./Product";
@ChildEntity()
export class  ProductAttachment extends Attachment {
    @Column({default:Product.name})
    forType:string
    @ManyToOne(()=>Product,attached=>attached.attachments) attached:Product;
   
} 
