export class CreateUserDto{
  readonly username:string;
  readonly passwordHash:string
  readonly firstname:string;
  readonly lastname:string;
  readonly IDcardNumber: number;
  readonly email:string;
  readonly age:number;
  readonly type:string;
}
