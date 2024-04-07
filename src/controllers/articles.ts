import { ArticleService} from "../services/articles";
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { AppDataSource } from "../_datasource";
import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"


@Controller('/articles/')
export class ArticleController {
  
  private articleS:ArticleService
  
  constructor( ) {}

  @Get("")
  async all(@Res() res:Response) {
   /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */
    console.log(this.articleS.datasource)
    let articles=await this.articleS.all()
    res.json(articles)
  }

  @Post("")
  async create(@Res() res:Response ,@Body() createArticleDto:CreateArticleDto){
   //  #swagger.tags = ['Article']
    let {article,userid}=createArticleDto
    article=<Article>{...article}
    let author=await AppDataSource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
    article.author=author
    author.articles.push(article)
    await AppDataSource.manager.save(Article,article)
    res.json({message:"created successfully"})
    /*AppDataSource.manager.findOneByOrFail(Author,{id:userid}).then(d=>{
        author=d;
        return author
    }).then(a=>{
        article.author=a;
        a.articles=[]
        a.articles.push(article)
        return article
    }).then(a=>{
        AppDataSource.manager.save(Article,a)
        //AppDataSource.manager.save(a.user)
        res.json({message:"created successfully"})
    })*/
  }
}
