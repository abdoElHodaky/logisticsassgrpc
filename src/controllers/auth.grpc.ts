import { credentials } from "@grpc/grpc-js";
import {_Auth } from "../protos/dist/";
import { Res,  Controller , Post ,Body } from "@decorators/express";
import { Response  } from "express";
import { LoginUserDto } from "../dto/";
const address = "localhost:50051";

@Controller("/grpc/auth")
export class GrpcAuthController {
  private client =new _Auth.AuthServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Post("login")
  async login(@Res() res:Response, @Body() loginUserDto:LoginUserDto ):Promise<void>{
    const req:_Auth.LoginUserReq={
      ...loginUserDto
    }
    this.client.login(req,(err:any,resp:_Auth.LoginUserRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       res.json(resp)
     }
    })
  }
}
