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
       let {userId}=call.request
    try
    {
      let tickets=await TicketGrpcService.service.all(userId)
      if (tickets instanceof Array){
        let _tickets=tickets.map(_Ticket.Ticket.fromJSON)
        _tickets.forEach((e,i)=>{e.userId=parseInt(userId)})
        const res:_Ticket.GetAllTicketRes={
          tickets:_tickets,
          error:{
            Message:"",name:"",type:""
          }
         }
         callback(null,res)}
        else {
          callback(null, {tickets:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
        }
     }
   catch (err){
     callback({code:status.INTERNAL},{tickets:[],error:{
        Message:"Some Internet Error",type:"InternalError",name:""
     }  });
     console.error(err);
       }
  
 },
    
   async create( call: ServerUnaryCall<_Ticket.CreateTicketReq,_Ticket.CreateTicketRes>,
    callback: sendUnaryData<_Ticket.CreateTicketRes>
 ){
     let {userId,ticket}=call.request
      try{
       const supticket=_Ticket.Ticket.toJSON((ticket!=undefined)?ticket:_Ticket.createBaseTicket())
       let _ticket=await TicketGrpcService.service.create(userId,supticket)
       if(_ticket instanceof supTicket){
        const ticket=_Ticket.Ticket.fromJSON(_ticket)
         ticket.userId=parseInt(userId)
         callback(null,{
           ticket:ticket
         })
       }
      else{
        callback(null,{
           ticket:_Ticket.createBaseTicket()
         })
      }
      }catch(err){
         callback({code:status.INTERNAL},{
           ticket:_Ticket.createBaseTicket()
         })
      }
    } 
  }

}
