import { Injectable , Inject } from "@decorators/di";
import { _Data } from "./datasource";
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/"
import { Error,NotFoundError} from "common-errors";
//@Injectable()
export class ArticleService extends _Data {
  constructor (){
      super()
  }

  async all():Promise<Article[]|Error>
  {
    //console.log(this._source)
    let articles= await this.datasource.manager.find(Article,{
      relations:{
        author:true
      },
      cache:true
    })
  }

 async create(articlecdto:{userId:number,article:CreateArticleDto}):Promise<Article|void>{
     
    const {userId,article}=articlecdto
    let _article=this.datasource.manager.create(Article,{...article})
     console.log("DataS ",_article)
    /*_article.title=article.title
   _article.imgurl=article.imgurl
   _article.content=article.content*/
   //onsole.log(article)
   /* let author=await this.datasource.manager.findOneByOrFail(Author,{id:userId})
    _article.author=author
    author.articles.push(_article)
    _article=await this.datasource.manager.save(Article,_article)*/
    return _article
   
 }
}
