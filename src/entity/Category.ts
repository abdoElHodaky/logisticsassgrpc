import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,JoinTable,
        CreateDateColumn, UpdateDateColumn } from "typeorm"
@Entity()
export class Category<T extends Function>
{
   @PrimaryGeneratedColumn("increment")
   id:number

   @Column("varchar")
   name:string

   @Column("varchar")
   description:string

   @CreateDateColumn()
   createdAt:Date

   @UpdateDateColumn()
   updatedAt:Date

   @ManyToMany<T>(entity=>entity?.categories)
   @JoinTable()
   entities?:T[]
}
