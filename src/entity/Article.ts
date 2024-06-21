import { Entity,Column,ManyToOne,OneToMany,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { Author } from "./users/";
//import { Attachment } from "./Attachment";

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
   
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
