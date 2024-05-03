import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Ticket} from "../protos/dist/";
import { supTicketService }from "./";
//import { Service } from "../service.decorator";
//console.log(services)
export class supTicketGrpcService  {
  
// @Service("Ticket")
  static service:any=new supTicketService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Ticket.TicketServiceServer = {
   async all (call: ServerUnaryCall<_Ticket.GetAllTicketReq,_Ticket.GetAllTicketRes>,
    callback: sendUnaryData<_Ticket.GetAllTicketRes>
 ){
     let tickets=await supTicketGrpcService.service.all()
     //console.log(tickets)
     let _tickets=tickets.map(_Ticket.Ticket.fromJSON)
     //console.log(tickets)
    _tickets.forEach((a:_Ticket.Ticket,inx:number)=>{
     let {user,created_at,updated_at}=tickets[inx]
     if(user!=null) {
      a.userId=user.id
      //console.log(a.createdAt instanceof Date)
     }
    else { a.userId = Math.floor(Math.random()*21) }
      a.createdAt=created_at
      a.updatedAt=updated_at
     })
     let res:_Ticket.GetAllTicketRes={tickets:_tickets,error:{
       Message:"",type:"",name:""
     }}
     callback(null,res)
      }
    , async create (
    call: ServerUnaryCall<_Ticket.CreateTicketReq,_Ticket.CreateTicketRes>,
    callback: sendUnaryData<_Ticket.CreateTicketRes>
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
