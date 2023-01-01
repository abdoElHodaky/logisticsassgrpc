import { Entity,Column,ManyToOne,PrimaryGeneratedColumn} from "typeorm"
import { Author } from "./Author";

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

    @ManyToOne(()=>Author,author=>author.articles) author:Author;
}
