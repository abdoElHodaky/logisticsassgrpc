
export class CreateProductDto{
  
  readonly title:string
  readonly description:string
  readonly specs:[{name:string,value:string}]
  
}
