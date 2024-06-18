import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Res,  Controller , Get ,Post,Req} from "@decorators/express";
import { Response } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware} from "../middlewares/authenticate";
import {PasswordService} from "../services/";
//const address = "localhost:50051";
@Controller("/me")
export class GrpcMeController {
 /* private client =new _User.UserServiceClient(
    address,
    credentials.createInsecure()
  )
  */
  @Get("",[AuthenticateMiddleware])
  async me(@Req() req:Request,@Res() res:Response ):Promise<void>{
    res.json(req.auth)
  }

  @Post("/changePassword",[AuthenticateMiddleware])
  async change_password(@Req() req:Request,@Res() res:Response ):Promise<void>{
    const passwordS=new PasswordService()
    const password=await passwordS.create({
     userId:req?.auth?.id,
     passphase:req?.body?.passphase
    })
   
    res.redirect("/me")
  }

}
