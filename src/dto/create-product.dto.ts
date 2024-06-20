import { IsNotEmpty,IsArray, ValidateNested } from "class-validator";
export class CreateProductDto{
  
  @IsNotEmpty()
  readonly title:string
  @IsNotEmpty()
  readonly description:string
  @IsArray()
  @ValidateNested({ each: true })
  readonly specs:Spec[]
  
}

class Spec {
  @IsNotEmpty()
  readonly name:string

  @IsNotEmpty()
  readonly value:any
}
