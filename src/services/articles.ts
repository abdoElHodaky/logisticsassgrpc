import { Injectable , Inject } from "@decorators/di";
import { DataSource } from "typeorm"
import { Article,User,Author } from "../entity/"
import { AppDataSource , _datasourceInject } from "../data-source";
import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class ArticleService {
  constructor (@Inject(_datasourceInject) private readonly datasource: DataSource){}

  async all():Promise<Article[]>{
    let articles=await this.datasource.manager.find(Article)
    return articles
  }
}
