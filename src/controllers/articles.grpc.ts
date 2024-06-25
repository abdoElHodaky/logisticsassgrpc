import { credentials,Metadata } from "@grpc/grpc-js";
import {_Article } from "../protos/dist/";
import {CreateArticleDto,validatorDto} from "../dto/";
import { User} from "../entity/";
import { Res,  Controller , Get ,Post,Req , Body} from "@decorators/express";
import { Response } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware,AuthorMiddleware,ValidatedCreatedArticle  } from "../middlewares/";
import {isEmpty} from "../helpers";
import {promisify} from 'util';
import { Error} from "common-errors";
import {Env} from "../env";
const address = "localhost:"+Env.GRPCSONEPORT

@Controller("/articles")
export class GrpcArticleController {
 private client =new _Article.ArticleServiceClient(
    address,
    credentials.createInsecure()
  )

 @Get("")
 async index():Promise<any>{
   return await this.all()
 }
 
  async all():Promise<any>{
    const req:_Article.GetAllReq={}

 //  const all=promisify(this.client.all)
  //  console.log(await all(req))
    this.client.all(req,(err:any,resp:_Article.GetAllRes)=>{
      if (err) {
      Promise.reject(err)
    } else {
        const resl=_Article.GetAllRes.toJSON(resp)
       // console.log(resl?.articles.map(transformDate))
        Promise.resolve(resl)
     }
     return Promise
    })
       
      
  }
  
 // @AuthenticateMiddleware
  @Post("",[AuthenticateMiddleware,AuthorMiddleware , ValidatedCreatedArticle  ])
  async create(@Req() req:Request,@Res() res:Response, @Body() createarticledto:CreateArticleDto ):Promise<void>{
     let user=req.auth
     let articlecdto=createarticledto
     const empty=isEmpty(articlecdto)
     const errors=await validatorDto(CreateArticleDto,createarticledto)
     console.log(empty)
    try{
    if(errors.length==0){
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
      //const error=new Error("Argument(s) is/are empty or not existed",err)
      res.status(400).jsonp({message:err?.message})
     }
    }
    else {
      throw new Error("Argument(s) is/are empty or not existed")
      
    }
    }catch(err:any){
      res.status(400).jsonp({message:err?.message})
    }
 
  }
  
}
