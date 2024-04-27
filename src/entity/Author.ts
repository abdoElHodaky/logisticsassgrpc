import { Entity ,Column,PrimaryGeneratedColumn, OneToMany, ChildEntity} from "typeorm"
import { User} from "./";
//import { User } from "./";

//@Entity()
@ChildEntity()
export class Author extends User {
    
    @Column({default:"author"})
    type:string

    @OneToMany(()=>Article,article=>article.author) articles:Article[];

}
