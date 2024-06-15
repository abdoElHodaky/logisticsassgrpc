import { ChildEntity,ManyToOne,Column} from "typeorm";
import { Attachment,Product,Orgz} from "./";
@ChildEntity()
export class  ProductAttachment extends Attachment {
    @Column({default:Product.name})
    forType:string
    @ManyToOne(()=>Product,attached=>attached.attachments) attached:Product;
   
} 

@ChildEntity()
export class  OrgzAttachment extends Attachment {
    @Column({default:Orgz.name})
    forType:string
    @ManyToOne(()=>Orgz,attached=>attached.attachments) attached:Orgz;
   
} 
