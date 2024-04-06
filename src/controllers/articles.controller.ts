import { Author } from "../entity/Author";
import { Article } from "../entity/Article"
import { Author } from "../entity/Author"
import { AppDataSource } from "../_datasource";

import {
  Response, Params, Controller, Get,
  attachControllers, Middleware
} from '@decorators/express';

@Controller('/')
class ArticleController {

  constructor() {}

  @Get('articles')
  async all(@Response() res) {
    let articles=await AppDataSource.manager.find(Article)
    res.json(articles)
  }

  @Post("create")
  async create(@Body() createArticleDto:CreateArticleDto){
    let {article,useris}=createArticleDto
    let article=<Article>{...article}
    let author:Author=await AppDataSource.manager.findOneByOrFail(Author,{id:userid})
    article.author=author
    author.articles.push(article)
    await article.save()
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
