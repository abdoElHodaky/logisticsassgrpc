import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Article} from "../protos/dist/";
//import { Service} from "./service.decorator";
import { services } from "./services";
console.log(services)
export class ArticleGrpcService  {
  static service:any=services["Article"]()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Article.ArticleServiceServer = {
   async all (call: ServerUnaryCall<_Article.GetAllReq,_Article.GetAllRes>,
    callback: sendUnaryData<_Article.GetAllRes>
 ){
     let articles=await ArticleGrpcService.service.all()
     let _articles=articles.map(_Article.Article.fromJSON)
     let res:_Article.GetAllRes={articles:_articles,error:{
       Message:"",type:"",name:""
     }}
     callback({code:status.OK},res)
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
console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
