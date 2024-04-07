import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource  } from "../includes"
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class ArticleService {
  @Inject("datasource") private readonly datasource: DataSource=AppDataSource 
  constructor (){}

  async all():Promise<Article[]>
  {
    return this.datasource.manager.find(Article)
  }
}
