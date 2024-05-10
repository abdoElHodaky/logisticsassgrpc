import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Res,  Controller , Get } from "@decorators/express";
import { Response  } from "express";
import {Env} from "../env";

const address = "localhost:"+Env.GRPCPORT

@Controller("/users")
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
    //  res.jsonp(err);
        console.error(err)
    } else {
       //res.json(resp)
        console.log(resp)
     }
    })
  }
}
