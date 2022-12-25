import { Entity,Column,PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm"

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

    @CreateDateColumn({type: "timestamp", nullable: true})
    created_at: string;

    @UpdateDateColumn({type: "timestamp", nullable: true})
    updated_at: string;
}
