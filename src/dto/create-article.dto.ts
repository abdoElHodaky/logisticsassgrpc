import { IsNotEmpty} from "class-validator";

export class CreateArticleDto{

@IsNotEmpty()
readonly  cateogry:string
@IsNotEmpty()
readonly  imgurl:string
@IsNotEmpty()
readonly  content:string
@IsNotEmpty()
readonly title:string
}
