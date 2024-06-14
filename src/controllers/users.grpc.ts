import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Req, Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import {Env} from "../env";
import {transformDate} from "../grpc/util";
const address = "localhost:"+Env.GRPCSTWOPORT

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
        res.jsonp(err)
    } else {
        const resl=_User.GetAllUserRes.toJSON(resp)
        
        res.json(resl)
     }
      //res.jsonp(resl)
    })
  }
}
