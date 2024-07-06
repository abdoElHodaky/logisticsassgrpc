import { Entity,Column,ManyToOne,PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class Address {
    
    @Column({type: "varchar", nullable: true})
    title: string;

    @Column({type: "varchar"})
    street: string;
    
    @Column({type: "varchar", nullable: true})
    city: string;

    @Column({type: "varchar", nullable: true})
    state: string;
   
    @Column({type: "varchar", nullable: true})
    country: string;
  
   @Column({type: "varchar", nullable: true})
    ip: string;
    






}
