import { Article } from "../entity/article"
export class CreateArticleDto{
  readonly article:Article
  readonly userid:string
}
