import { ChildEntity,ManyToOne,Column} from "typeorm";
import { Attachment} from "./Attachment";
import { Product,Orgz} from "../";

@ChildEntity()
export class  ProductAttachment extends Attachment {
    
    @Column({type:"varchar",default:"Product"})
    forType:string
    @ManyToOne(()=>Product,attached=>attached.attachments) attached:Product;
   
} 

@ChildEntity()
export class  OrgzAttachment extends Attachment {
    
     @Column({type:"varchar",default:"Orgz"})
    forType:string
    @ManyToOne(()=>Orgz,attached=>attached.attachments) attached?:Orgz;
   
} 
