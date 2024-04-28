import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";

const address = "localhost:3030";

@Controller("/grpc/users")
export class GrpcUserController {
  private client =new _User.UserServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Res() res:Response ):Promise<void>{
    const req:_User.GetAllUserReq={}
    this.client.all(req,(err:any,resp:_User.GetAllUserRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
}
