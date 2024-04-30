import { Injectable , Inject } from "@decorators/di";
import { _Data } from "./datasource";
import { supTicket,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/create-article.dto"

//@Injectable()
export class supTickeStervice extends _Data {
  constructor (){
      super()
  }

  async all():Promise<supTicket[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(supTicket)
  }

 async create(createArticleDto:CreateArticleDto):Promise<supTicket|void>{
     
    const {article,userid}=createArticleDto
    let _article=<Article>{...article}
    let author=await this.datasource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
    _article.author=author
    author.articles.push(_article)
    _article=await this.datasource.manager.save(Article,_article)
    return _article
   
 }
}
