import { credentials } from "@grpc/grpc-js";
import {_Auth ,_User} from "../protos/dist/";
import {User} from "../entity/";
import { Res,  Controller , Post ,Body } from "@decorators/express";
import { Response  } from "express";
import { LoginUserDto } from "../dto/";
import { Error } from "common-errors";
import { isEmpty} from "../helpers";
import {Env} from "../env";
const address = "localhost:"+Env.GRP_CPORT
var jwt = require('jsonwebtoken');
@Controller("/auth")
export class GrpcAuthController {
  private client =new _Auth.AuthServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Post("/login")
  async login(@Res() res:Response, @Body() loginUserDto:LoginUserDto ):Promise<void>{
   if(isEmpty(loginUserDto)==false){
    const req:_Auth.LoginUserReq={
      username:loginUserDto.username,
      passwordHash:loginUserDto.passwordHash
    }
    try{
    this.client.login(req,(err:any,resp:_Auth.LoginUserRes)=>{
      if (err) {
      res.jsonp(err);
        console.error(err)
    } else {
       // let _user=new User()
        //let usee=_User.User.toJSON(resp.user)
        let user=resp.user
        if(user!=undefined){
        console.log(user)
       let token =jwt.sign(user, "secret", { expiresIn: "1h"});
       res.json({accessToken:token})
     }
        else {
          res.json({accessToken:""})
        }
      }
    })
    }catch(err:any){
      console.log(err)
      const error=new Error("Login Information not provided or not existed",err)
      res.jsonp({message:error?.message})
    }
  } 
  else{
    throw new Error("Login Information not provided or not existed")
   
  }
}
 
}
