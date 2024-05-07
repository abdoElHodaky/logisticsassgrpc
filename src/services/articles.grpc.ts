import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Article} from "../protos/dist/";
import {Article} from "../entity/"
import {CreateArticleDto} from "../dto/create-article.dto";
import { ArticleService }from "./";
export class ArticleGrpcService  {
  //@Service("Article")
  static service:any=new ArticleService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Article.ArticleServiceServer = {
   async all (call: ServerUnaryCall<_Article.GetAllReq,_Article.GetAllRes>,
    callback: sendUnaryData<_Article.GetAllRes>
 ){
     let articles=await ArticleGrpcService.service.all()
     //console.log(articles)
     let _articles=articles.map(_Article.Article.fromJSON)
     _articles.forEach((a:_Article.Article,inx:number)=>{  
       let {author,created_at,updated_at}=articles[inx]
       a.userId=author.id
       a.createdAt=created_at
       a.updatedAt=updated_at
       //console.log(created_at?.toLocaleString("en-eg", {timeZone: "Africa/cairo"}))
     })
     let res:_Article.GetAllRes={articles:_articles,error:{
       Message:"",type:"",name:""
     }}
     callback(null,res)
      }
    , async create (
    call: ServerUnaryCall<_Article.CreateReq,_Article.CreateRes>,
    callback: sendUnaryData<_Article.CreateRes>
  ){
       let {userId,article}=call.request
       const {title,content,imgurl}=_Article.Article.fromJSON((article!=undefined)?article:_Article.createBaseArticle())
      //console.log({...article})
       let _article=await ArticleGrpcService.service.create({
         userId:userId,
         article:{
           title:title,
           content:content,
           imgurl:imgurl,
          // category:_article.category
         }
       })
      if(_article instanceof Article){
        const article=_Article.Article.fromJSON(_article)
        article.userId=userId
        console.log(article)
      callback(null,{
        article:article
      })}
      else {
        console.log(_article,typeof(_article))
        callback(null,{article:_Article.createBaseArticle() })
      }
  }
  }

  
    
/*static  async _all (call: ServerUnaryCall<_Article.GetAllReq,_Article.GetAllRes>,
    callback: sendUnaryData<_Article.GetAllRes>
 ){
  let articles=await this.artclS.all()
  let _articles=articles.map(_Article.Article.fromJSON)
  console.log(_articles)
  }

static  async _create(
    call: ServerUnaryCall<_Article.CreateReq,_Article.CreateRes>,
    callback: sendUnaryData<_Article.CreateRes>
  ){}
    */
 }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
