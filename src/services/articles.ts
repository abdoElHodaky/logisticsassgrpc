import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource ,_datasource } from "../includes"
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ArticleService {
    private datasource:DataSource=AppDataSource
  constructor (){}

  async all():Promise<Article[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Article)
  }
}
