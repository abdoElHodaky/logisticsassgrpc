export class CreateAuthorDto{
  readonly username?:string;
  readonly firstname?:string;
  readonly lastname?:string;
  readonly IDcardNumber?: number;
  readonly email?:string;
  readonly age?:number;
  readonly type?:string;
  readonly passwordHash?:string;
  
}

