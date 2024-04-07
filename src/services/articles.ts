import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource  } from "../includes"
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class ArticleService {
    public datasource:DataSource 
  constructor (){}

  async all():Promise<Article[]>
  {
    return await this.datasource.manager.find(Article)
  }
}
