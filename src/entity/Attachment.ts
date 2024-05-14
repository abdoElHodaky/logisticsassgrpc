import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, TableInheritance , BaseEntity } from "typeorm"
import { User } from "./User";
@TableInheritance({column:{
    type:"varchar",
    name:"type"
}
})
@Entity()
export class Attachment<T? extends BaseEntity> {
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({default:""})
    title: string;
    @Column({default:""})
    description:string;
    @Column({default:""})
    thumbnail:string;
    @Column({default:""})
    source:string;

    @ManyToOne(()=>User,uploader=>uploader.media) uploader:User
    @ManyToOne<T>(entity=>entity.attachments) entity:T
}
