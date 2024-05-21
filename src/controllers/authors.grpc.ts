import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Req,Res,  Controller , Get ,Post } from "@decorators/express";
import { Response  } from "express";
import { Request } from "express-jwt";
import { AuthenticateMiddleware} from "../middlewares/";
import { services} from "../services/enum";
import {Env} from "../env";
const address = "localhost:"+(Env.GRPCSOnePORT || Env.GRPCSONEPORT)

@Controller("/authors")
export class GrpcAuthorController {
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
  @Post("",[AuthenticateMiddleware])
  async create(@Req() req:Request,@Res() res:Response):Promise<void>{
    let user=req?.auth
    const authorS=services.Author
    user=await authorS.create(user)
    res.jsonp(user)
  }
}
