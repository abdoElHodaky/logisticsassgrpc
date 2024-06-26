import { services} from "../services/enum";
import { Article  } from "../entity/"
import { GrpcArticleController } from "./grpc/articles";
import { CreateArticleDto } from "../dto/create-article.dto"
import { Req,Res,  Controller , Get ,Post } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware,AuthorMiddleware,ValidatedCreatedArticle  } from "../middlewares/";


@Controller('/articles')
export class ArticleController {
  private grpcC=new GrpcArticleController()
  
  
  constructor( ) {}

  @Get("")
  async all():Promise<any> {
   return await  this.grpcC.all()
  }

  @Post("",[AuthenticateMiddleware,AuthorMiddleware,ValidatedCreatedArticle])

  async create(@Req() req:Request ,@Body() createArticleDto:CreateArticleDto):Promise<Article|void>{
   
    return await this.grpcC.create(req?.auth?.id,createArticleDto)
    
  }
}
