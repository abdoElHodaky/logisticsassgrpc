import { Article } from "../entity/Article"
export class CreateArticleDto{
  readonly article:Article
  readonly userid:string
}
