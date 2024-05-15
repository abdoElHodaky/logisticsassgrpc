import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Req, Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import {Env} from "../env";

const address = "localhost:"+Env.GRPCSTwoPORT

@Controller("/users")
export class GrpcUserController {
  private client =new _User.UserServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Req() req:Request,@Res() res:Response ):Promise<void>{
    const reqalluser:_User.GetAllUserReq={}
    this.client.all(reqalluser,(err:any,resp:_User.GetAllUserRes)=>{
    let resl:any;
      if (err) {
        resl=err
    } else {
        resl=_User.User.toJSON(resp)
     }
      res.jsonp(resl)
    })
  }
}
