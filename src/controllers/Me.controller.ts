import { credentials } from "@grpc/grpc-js";
import {_User } from "../protos/dist/";
import { Res,  Controller , Get ,Post,Req} from "@decorators/express";
import { Response } from "express";
import { Request } from "express-jwt";
import {AuthenticateMiddleware} from "../middlewares/authenticate";
const address = "localhost:50051";
@Controller("/me")
export class GrpcMeController {
  private client =new _User.UserServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Get("",[AuthenticateMiddleware])
  async all(@Req() req:Request,@Res() res:Response ):Promise<void>{
    res.json(req.auth)
  }

}
