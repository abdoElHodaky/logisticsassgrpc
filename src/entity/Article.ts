import { Entity,Column,ManyToOne,PrimaryGeneratedColumn} from "typeorm"
import { User } from "./User";

@Entity()
export class Article {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    content: string;

    @Column({type: "varchar", nullable: true})
    title: string;

    @Column({type: "varchar"})
    imgurl: string;

    @Column({type: "varchar", nullable: true})
    cateogry: string;

    @ManyToOne(()=>User,user=>user.articles) user:User;
}
