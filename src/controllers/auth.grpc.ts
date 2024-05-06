import { credentials } from "@grpc/grpc-js";
import {_Auth ,_User} from "../protos/dist/";
import {User} from "../entity/";
import { Res,  Controller , Post ,Body } from "@decorators/express";
import { Response  } from "express";
import { LoginUserDto } from "../dto/";
const address = "localhost:50051";
var jwt = require('jsonwebtoken');
@Controller("/auth/")
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
       // let _user=new User()
        //let usee=_User.User.toJSON(resp.user)
        let {user}=resp
        console.log(user)
       // let token =jwt.sign({userId:user.id},"secret", { expiresIn: 60 * 60 })
       res.json({accessToken:""})
     }
    })
  }
}
