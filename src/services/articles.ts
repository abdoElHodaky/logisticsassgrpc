import { Injectable , Inject } from "@decorators/di";
import { _Data } from "./datasource";
import { Article,User,Author } from "../entity/"
import { CreateArticleDto } from "../dto/"
import { Error,NotFoundError} from "common-errors";
import { AuthorService} from "./users";
//@Injectable()
export class ArticleService extends _Data {
  private userS:any=new AuthorService()
  constructor (){
      super()
  }

  async all():Promise<Article[]|Error>
  {
    //console.log(this._source)
    let articles= await this.em.find(Article,{
      relations:{
        author:true
      },
      cache:true
    })
    return (articles?.length!=0)? articles:(new NotFoundError("Article"));
  }

 async create(articlecdto:{userId:number,article:CreateArticleDto}):Promise<Article|void>{
     
    const {userId,article}=articlecdto
    let _article=this.em.create(Article,{...article})
    let author=await this.userS.id(`${userId}`)
   if(author instanceof Author) _article.author=author
    
    console.log("DataS ",_article)
    
   return await this.em.save(Article,_article)
   
 }
}
