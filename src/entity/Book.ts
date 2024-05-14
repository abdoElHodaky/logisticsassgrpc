import { ChildEntity, Column, Entity } from "typeorm"
import { Attachment } from "./Attachment";

@ChildEntity()
export class Book extends Attachment<T> {
    @Column({default:"book"})
    type:string

}
