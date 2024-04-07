import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource ,_datasource } from "../includes"
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ArticleService {
    public datasource:DataSource=AppDataSource
  constructor (@Inject(_datasource) private _source:DataSource){}

  async all():Promise<Article[]>
  {
    console.log(this._source)
    return await this.datasource.manager.find(Article)
  }
}
