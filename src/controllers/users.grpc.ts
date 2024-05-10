import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Req, Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import {Env} from "../env";

const address = "localhost:"+Env.GRPCPORT

@Controller("/users")
export class GrpcUserController {
  private client =new _User.UserServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("")
  async all(@Req() req:Request,@Res() res:Response ):Promise<void>{
    const req:_User.GetAllUserReq={}
    this.client.all(req,(err:any,resp:_User.GetAllUserRes)=>{
    let resl:any;
      if (err) {
        resl=err
      //  console.error(err)
    } else {
        resl=resp
       // console.log(resp)
     }
      console.log(resl?.users)
      res.set('Content-Type', 'application/json');
      res.send(JSON.stringify(resl));
    })
  }
}
