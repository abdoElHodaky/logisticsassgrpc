import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Article} from "../protos/dist/";
import { ArticleService }from "./";
import { Service } from "../service.decorator";
//console.log(services)
export class ArticleGrpcService  {
  @Service("Article")
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
       a.userId=articles[inx].author.id
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
       
     }}

  
    
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
