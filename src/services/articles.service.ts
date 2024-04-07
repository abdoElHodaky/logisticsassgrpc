import { Injectable , Inject } from "@decorators/di";
import { DataSource } from "typeorm"
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { AppDataSource ,datasourceinject } from "../_datasource";
import { CreateArticleDto } from "../dto/create-article.dto"

@Injectable()
export class ArticleService {
  constructor (@Inject(datasourceinject) datasource: DataSource){}

  async all():Promise<any>{
    return
  }
}
