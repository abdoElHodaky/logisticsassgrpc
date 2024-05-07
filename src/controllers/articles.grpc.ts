import { credentials } from "@grpc/grpc-js";
import {_Article } from "../protos/dist/";
import {CreateArticleDto} from "../dto/create-article.dto";
import { User} from "../entity/";
import { Res,  Controller , Get ,Post,Req , Body} from "@decorators/express";
import { Response } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware} from "../authenticate.middleware";
const address = "localhost:50051";
@Controller("/articles")
export class GrpcArticleController {
  private client =new _Article.ArticleServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response ):Promise<void>{
    const req:_Article.GetAllReq={}
    this.client.all(req,(err:any,resp:_Article.GetAllRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
  
 // @AuthenticateMiddleware
  @Post("",[AuthenticateMiddleware])
  async create(@Req() req:Request,@Res() res:Response, @Body() createarticledto:CreateArticleDto ):Promise<void>{
     let user=req.auth
     let articlecdto=createarticledto
    console.log(articlectdo)
     if(user instanceof User){
       let article:_Article.CreateReq={
         userId:user.id,
         article:_Article.Article.fromJSON(articlecdto)
       }
       res.jsonp(article)
       /*this.client.create(article,(err:any,resp:_Article.CreateRes)=>{
         if (err) {
         res.jsonp(err);
        console.error(err)
        } else {
          res.json(resp)
         }
    })*/
       }
       else {res.json({message:"error"})}
     }
  }
