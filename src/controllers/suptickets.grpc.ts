import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt"

const address = "localhost:3030";

@Controller("/suptickets")
export class GrpcSupTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response ):Promise<void>{
    console.log("89")
    const req:_Ticket.GetAllTicketReq={  
      userId:"0"
    }
    console.log(req)
    this.client.all(req,(err:any,resp:_Ticket.GetAllTicketRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
}
