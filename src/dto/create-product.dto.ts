import { IsNotEmpty,IsArray, ValidateNested ,IsInt} from "class-validator";
export class CreateProductDto{
  
  @IsNotEmpty()
  readonly title:string
  @IsNotEmpty()
  readonly description:string
  @IsArray()
  @ValidateNested({ each: true })
  readonly specs:Spec[]
  
  readonly category:Category|Category[]
  
}

class Spec {
  @IsNotEmpty()
  readonly name:string

  @IsNotEmpty()
  readonly value:any
}

class Category {
  @IsInt()
  readonly id:number

  @IsNotEmpty()
  readonly name:string
}
