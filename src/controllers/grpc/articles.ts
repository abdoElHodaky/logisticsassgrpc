import { credentials,Metadata } from "@grpc/grpc-js";
import {_Article } from "../../protos/dist/";
import {CreateArticleDto,validatorDto} from "../../dto/";
import { User} from "../entity/";
import { Res,  Controller , Get ,Post,Req , Body} from "@decorators/express";
import { Response } from "express";
import { Request } from "express-jwt";
//import {AuthenticateMiddleware,AuthorMiddleware,ValidatedCreatedArticle  } from "../middlewares/";
import { Error} from "common-errors";
import {Env} from "../../env";
const address = "localhost:"+Env.GRPCSONEPORT

//@Controller("/articles")
export class GrpcArticleController {
 private client =new _Article.ArticleServiceClient(
    address,
    credentials.createInsecure()
  )

// @Get("")
 async index():Promise<any>{
   return await this.all()
 }
 
  async all():Promise<any>{
    const req:_Article.GetAllReq={}
    const client=this.client
    return new Promise((resolve,reject)=>{

     client.all(req,(err:any,resp:_Article.GetAllRes)=>{
      if (err) {
      reject(err)
    } else {
        const resl=_Article.GetAllRes.toJSON(resp)
       // console.log(resl?.articles.map(transformDate))
        resolve(resl)
     }
     
    })
    })
      
  }
  
 // @AuthenticateMiddleware
  //@Post("",[AuthenticateMiddleware,AuthorMiddleware , ValidatedCreatedArticle  ])
  async store(@Req() req:Request, @Body() carticledto:CreateArticleDto ):Promise<any>{
    let user=req?.auth
    let articlecdto=carticledto
    return await this.create(user?.id,articlecdto)

 }
 async create( userId:number,dto:CreateArticleDto ):Promise<any>{
     
     const client=this.client
    return new Promise((resolve,reject)=>{
    try{
    // if(user instanceof User){
      const _article= _Article.Article.fromJSON(dto)
   
       let article:_Article.CreateReq={
         userId:userId,
         article:_article
       }
      // res.jsonp(article)
       client.create(article,(err:any,resp:_Article.CreateRes)=>{
         if (err) {
         reject(err)
        } else {
          resolve(_Article.CreateRes.toJSON(resp))
         }
    })
       //}
       //else {res.json({message:"error"})}
      
     } catch(err:any){
      reject(err)
      
     }
    });
    
 
  }
  
}
