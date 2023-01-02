import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from "typeorm"
@TableInheritance({column:{
    type:"varchar",
    name:"type"
}})
@Entity()
export class Attachment {
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
}
