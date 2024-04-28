import { sendUnaryData, ServerUnaryCall, status,UntypedHandleCall } from "@grpc/grpc-js";
import { supTicket }from "../entity/"
import  {_Ticket} from "../protos/dist/";
import  {UserTicketService} from "./";

//@service("Ticket")
export class TicketGrpcService   {
 static service:any=new UserTicketService()
 // public [name: string]:UntypedHandleCall;
  public SrvImpl:_Ticket.TicketServiceServer={
    async all (call: ServerUnaryCall<_Ticket.GetAllTicketReq,_Ticket.GetAllTicketRes>,
    callback: sendUnaryData<_Ticket.GetAllTicketRes>)
      {
    try
    {
      let tickets=await TicketGrpcService.service.all(call.request.userId)
      if (tickets instanceof Array){
        let _tickets=tickets.map(_Ticket.Ticket.fromJSON)
        _tickets=_tickets.map(e=>e.userId=call.request.userId)
        const res:_Ticket.GetAllTicketRes={
          tickets:_tickets,
          error:{
            Message:"",name:"",type:""
          }
         }
         callback(null,res)}
        else {
          callback({ code: status.NOT_FOUND }, {tickets:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
        }
     }
   catch (err){
     callback({ code: status.INTERNAL }, {tickets:[],error:{
        Message:"Some Internet Error",type:"InternalError",name:""
     }  });
     console.error(err);
       }
  
 },
    
   async create( call: ServerUnaryCall<_Ticket.CreateTicketReq,_Ticket.CreateTicketRes>,
    callback: sendUnaryData<_Ticket.CreateTicketRes>
 ){
    
    } 
  }
/*  
  async all (call: ServerUnaryCall<_Ticket.GetAllTicketReq,_Ticket.GetAllTicketRes>,
    callback: sendUnaryData<_Ticket.GetAllTicketRes>
 ):Promise<any>
  {
    try
    {
      let tickets=await this.ticketS.all(call.request.userId)
      if (tickets instanceof Array){
        let _tickets=tickets.map(_Ticket.Ticket.fromJSON)
        const res:_Ticket.GetAllTicketRes={
          tickets:_tickets
         }
         callback(null,res)}
        else {
          callback({ code: status.NOT_FOUND }, null);
        }
     }
   catch (err){
     callback({ code: status.INTERNAL }, null);
     console.error(err);
       }
  
 }

  async create( call: ServerUnaryCall<_Ticket.CreateTicketReq,_Ticket.CreateTicketRes>,
    callback: sendUnaryData<_Ticket.CreateTicketRes>
 ):Promise<any>{
    
  }
  */
}
