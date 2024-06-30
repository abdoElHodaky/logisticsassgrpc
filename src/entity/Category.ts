import { Entity,Column,ManyToOne,OneToMany,PrimaryGeneratedColumn,
        CreateDateColumn, UpdateDateColumn,BaseEntity } from "typeorm"
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

   @ManyToMany(()=>T?.categories)
   @JoinTable()
   entities?:T[]
}
