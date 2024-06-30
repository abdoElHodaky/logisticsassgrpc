import { Entity,Column,ManyToMany,PrimaryGeneratedColumn,
        CreateDateColumn, UpdateDateColumn,ObjectType } from "typeorm"
@Entity()
export class Category<T extends BaseEntity>
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

   @ManyToMany(()=>T,t=>t?.categories)
   @JoinTable()
   entities?:T[]
}
