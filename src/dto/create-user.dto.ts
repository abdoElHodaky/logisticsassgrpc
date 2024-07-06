import {
  IsInt,
  Length,
  IsEmail,
  IsDate,
  Min,
  Max,Matches
} from 'class-validator';
export class CreateUserDto{
  @Length(8, 15)
  readonly username:string;
  @Length(8, 15)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {message: 'password too weak'})
  readonly password:string

  readonly firstname:string;
  readonly lastname:string;
  
  @IsInt()
  @Min(14)
  @Max(14)
  readonly IDcardNumber: number;
  @IsEmail()
  readonly email:string;
  @IsInt()
  readonly age:number;
  
  readonly type:string;
}
