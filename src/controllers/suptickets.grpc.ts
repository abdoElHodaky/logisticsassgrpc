import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Req , Res , Controller , Get , Body ,Post } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt"
import { AuthenticateMiddleware} from "../middlewares/";
import { Error } from "common-errors";
import { isEmpty} from "../helpers";
import {Env} from "../env";
import {dateToReadable} from "../grpc/util";
const address = "localhost:"+ Env.GRPCSTWOPORT

@Controller("/suptickets")
export class GrpcSupTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response ):Promise<void>{
   // console.log("89")
    const req:_Ticket.GetAllTicketReq={  
      userId:"0"
    }
    console.log(req)
    this.client.all(req,(err:any,resp:_Ticket.GetAllTicketRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
        const resl=_Ticket.GetAllTicketRes.toJSON(resp)
        resl?.tickets?.forEach((ticket:object,inx:number)=>{
        ticket["createdAt"]=dateToReadable(ticket["createdAt"])
        ticket["updatedAt"]=dateToReadable(ticket["updatedAt"])
        })
        res.json(resl)
     }
    })
  }
  
  @Post("",[AuthenticateMiddleware])
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
