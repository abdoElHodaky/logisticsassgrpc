import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Ticket} from "../protos/dist/";
import { supTicketService }from "./";
import { supTicket as Ticket } from "../entity/";
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
       let {userId,ticket:_ticket}=call.request
       _ticket=_Ticket.Ticket.toJSON((_ticket!=undefined)?_ticket:_Ticket.createBaseTicket())
       let ticket=await supTicketGrpcService.service.create(userId,_ticket)
       if(ticket instanceof Ticket){
         callback(null,{
           ticket:_Ticket.Ticket.fromJSON(ticket)
         })
       }
      else{
        callback(null,{
           ticket:_Ticket.createBaseTicket()
         })
      }
     }
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
