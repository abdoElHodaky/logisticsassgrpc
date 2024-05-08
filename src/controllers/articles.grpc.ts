import { credentials } from "@grpc/grpc-js";
import {_Article } from "../protos/dist/";
import {CreateArticleDto} from "../dto/create-article.dto";
import { User} from "../entity/";
import { Res,  Controller , Get ,Post,Req , Body} from "@decorators/express";
import { Response } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware,AuthorMiddleware} from "../middlewares/";
import {isEmpty} from "../helpers";
import { Error} from "common-errors";
import {Env} from "../env";
const address = "localhost:"+Env.GRP_CPORT

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
  @Post("/",[AuthenticateMiddleware  ])
  async create(@Req() req:Request,@Res() res:Response, @Body() createarticledto:CreateArticleDto ):Promise<void>{
     let user=req.auth
     let articlecdto=createarticledto
    if(isEmpty(articlecdto)==false){
    try{
     if(user instanceof User){
      const _article= _Article.Article.fromJSON(articlecdto)
      _article.userId=user.id
       let article:_Article.CreateReq={
         userId:user.id,
         article:_article
       }
      // res.jsonp(article)
       this.client.create(article,(err:any,resp:_Article.CreateRes)=>{
         if (err) {
         res.jsonp(err);
        console.error(err)
        } else {
          res.json(resp)
         }
    })
       }
       else {res.json({message:"error"})}
      
     } catch(err:any){
      console.log(err)
      const error=new Error("Argument(s) is/are empty or not existed",err)
      res.jsonp({message:error?.message})
     }
    }
    else {
      const error=new Error("Argument(s) is/are empty or not existed",err)
      res.jsonp({message:error?.message})
    }

 
  }
  
}
