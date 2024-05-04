import { Entity,Column,ManyToOne,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Author } from "./User";

@Entity()
export class Article {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: "varchar", nullable: true})
    title: string;

    @Column({type: "varchar"})
    imgurl: string;
    
    @Column({type: "varchar", nullable: true})
    content: string;

    @Column({type: "varchar", nullable: true})
    cateogry: string;

    @ManyToOne(()=>Author,author=>author.articles) author:Author;

    @CreateDateColumn(/*{type:"timestamp"}*/)
    created_at: Date;

    @UpdateDateColumn(/*{type:"timestamp"}*/)
    updated_at: Date;
}
