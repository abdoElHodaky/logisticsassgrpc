import { services} from "../services/enum";
import { Article  } from "../entity/"
import { GrpcArticleController } from "./articles.grpc";
import { CreateArticleDto } from "../dto/create-article.dto"
import { Res, Post, Controller, Get, Body } from '@decorators/express';
import { Response ,Request} from "express"


@Controller('/articles')
export class ArticleController {
  private grpcC=new GrpcArticleController()
  
  
  constructor( ) {}

  @Get("")
  async all():Promise<any> {
   return await  this.grpcC.all()
  }

  @Post("")
  async create(@Res() res:Response ,@Body() createArticleDto:CreateArticleDto):Promise<Article|void>{
   
    return await this.grpcC.create(req?.auth?.id,createArticleDto)
    
  }
}
