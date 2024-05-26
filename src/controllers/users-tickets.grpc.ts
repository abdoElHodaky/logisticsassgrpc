import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Req, Res,  Controller , Get ,Params,Post , Body} from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import { AuthenticateMiddleware,UserEqulityMiddleware  } from "../middlewares/";
import { isEmpty } from "../helpers";
import {Env} from "../env";
const address = "localhost:"+ Env.GRPCSONEPORT

@Controller("/users/:userId/tickets",[AuthenticateMiddleware])
export class GrpcUserTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response,@Params("userId") userId:string):Promise<void>{
    console.log(userId)
    const req:_Ticket.GetAllTicketReq={
      userId:userId
    }
    this.client.all(req,(err:any,resp:_Ticket.GetAllTicketRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
        const { ...tickets}=_Ticket.GetAllTicketRes.toJSON(resp)
       res.json(tickets)
     }
    })
  }
  
  @Post("",[UserEqulityMiddleware])
  async create(@Req() req:Request, @Res() res:Response, @Body() supticket:{type:string,subject:string,description:string}):Promise<void>{
    const {auth}=req
    const empty=isEmpty(supticket)
    try{
    if(empty==false){
    const supticketreq:_Ticket.CreateTicketReq={  
      userId:auth?.id.toString(),
      ticket:_Ticket.Ticket.fromJSON({
        type:supticket.type,
        subject:supticket.subject,
        description:supticket.description
      })
    }
    this.client.create(supticketreq,(err:any,resp:_Ticket.CreateTicketRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
    }
    else{ throw new Error("Argument(s) is/are empty or not existed") }
  }catch(err:any){  
     res.jsonp({message:err?.message})
   }
  }




}
