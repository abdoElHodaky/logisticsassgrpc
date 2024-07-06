<<<<<<< HEAD
import { service } from "../services/";
import { Article  } from "../entity/"
//import { AppDataSource } from "../_datasource";
=======
import { GrpcArticleController } from "./grpc/articles";
>>>>>>> mainrpc
import { CreateArticleDto } from "../dto/create-article.dto"
import { Req,Res, Body, Controller , Get ,Post } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware,AuthorMiddleware,ValidatedCreatedArticle  } from "../middlewares/";


@Controller('/articles')
export class ArticleController {
  private grpcC=new GrpcArticleController()
  
<<<<<<< HEAD
  @service("Article")
  private articleS;
=======
>>>>>>> mainrpc
  
  constructor( ) {}

  @Get("")
  async all():Promise<any> {
   return await  this.grpcC.all()
  }

  @Post("",[AuthenticateMiddleware,AuthorMiddleware,ValidatedCreatedArticle])

  async create(@Req() req:Request ,@Body() createArticleDto:CreateArticleDto):Promise<any>{
   
    return await this.grpcC.create(req?.auth?.id,createArticleDto)
    
  }
}
