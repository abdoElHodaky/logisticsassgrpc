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

 async create(createArticleDto:CreateArticleDto):Promise<Article:void>{
     
     let {article,userid}=createArticleDto
    article=<Article>{...article}
    let author=await this.datasource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
    article.author=author
    author.articles.push(article)
    article=await this.datasource.manager.save(Article,article)
    return article
   
 }
}
