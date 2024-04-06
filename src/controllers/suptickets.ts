
import { supTicket } from "../entity/supTicket"
import { User } from "../entity/User"
import { AppDataSource } from "../_datasource";
//import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"


@Controller('/articles')
export class ArticleController {

  constructor() {}

  @Get("/")
  async all(@Res() res:Response) {
   /* 	#swagger.tags = ['Article']
        #swagger.description = 'Endpoint to get articles' */

    
    
  }

  @Post("/create")
  async create(@Res() res:Response){
   //  #swagger.tags = ['Article']
    
}
