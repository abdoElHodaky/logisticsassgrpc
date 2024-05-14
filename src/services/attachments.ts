import { Injectable , Inject } from "@decorators/di";
import { DataSource ,AppDataSource ,_datasource } from "../includes"
import { Attachment } from "../entity/"
//import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class AttachmentService {
    private datasource:DataSource=AppDataSource
  constructor (){}

  async all<T>():Promise<Attachment<T>[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Attachment<T>)
  }

/* async create(createArticleDto:CreateArticleDto):Promise<Article|void>{
     
    const {article,userid}=createArticleDto
    let _article=<Article>{...article}
    let author=await this.datasource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
    _article.author=author
    author.articles.push(_article)
    _article=await this.datasource.manager.save(Article,_article)
    return _article
   
 } */
}
