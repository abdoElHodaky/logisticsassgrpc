export class CreateAuthorDto{
  readonly username?:string;
  readonly firstname?:string;
  readonly lastname?:string;
  readonly IDcardNumber?: number;
  readonly email?:string;
  readonly age?:number;
  readonly type?:string;
  readonly passwordHash?:string;
  
  to_ob(){
    return {
      username:this.username,
      firstname:this.firstname,
      lastname:this.lastname,
      IDcardNumber:this.IDcardNumber,
      email:this.email,
      age:this.age,
      type:this.type,
      passwordHash:this.passwordHash
    }
  }
}

