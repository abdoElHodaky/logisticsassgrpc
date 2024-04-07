import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource  } from "../includes"
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class ArticleService {
   private  datasource=AppDataSource 
  constructor (){}

  async all():Promise<Article[]>
  {
    return await this.datasource.manager.find(Article)
  }
}
