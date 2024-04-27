import { credentials } from "@grpc/grpc-js";
import {_Ticket } from "../protos/dist/";
import { Res,  Controller , Get ,Params } from "@decorators/express";
import { Response  } from "express";

const address = "localhost:3030";

@Controller("/grpc/users")
export class GrpcTicketController {
  private client =new _Ticket.TicketServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("/:id/tickets")
  async all(@Res() res:Response,@Params("id") userId:string):Promise<void>{
    const req:_Ticket.GetAllTicketReq={
      userId:userId
    }
    this.client.all(req,(err:any,resp:any)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
}
