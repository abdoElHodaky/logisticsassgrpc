import { IsNotEmpty,IsArray} from "class-validator";
export class CreatePurshaseDto {
   @IsNotEmpty()
   userId:string
   @IsArray()
   itemsIds:Array<number>
}

export class CreateSubscriptionDto {
  userId:string
  itemsIds:Array<number>
}
