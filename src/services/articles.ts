import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource  } from "../includes"
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class ArticleService {
    public datasource:DataSource=AppDataSource
  constructor (){}

  async all():Promise<Article[]>
  {
    console.log(this.datasource)
    return await this.datasource.manager.find(Article)
  }
}
