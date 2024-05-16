import { credentials } from "@grpc/grpc-js";
import {_Auth ,_User} from "../protos/dist/";
import {User} from "../entity/";
import { Res,  Controller , Post ,Body } from "@decorators/express";
import { Response  } from "express";
import { LoginUserDto } from "../dto/";
import { Error } from "common-errors";
import { isEmpty} from "../helpers";
import {ValidatedMiddleware} from "../middlewares/";
import {Env} from "../env";
const address = "localhost:"+Env.GRPCSOnePORT
var jwt = require('jsonwebtoken');
@Controller("/auth")
export class GrpcAuthController {
  private client =new _Auth.AuthServiceClient(
    address,
    credentials.createInsecure()
  )
  
  @Post("/login",[ValidatedMiddleware])
  async login(@Res() res:Response, @Body() loginUserDto:LoginUserDto ):Promise<void>{
  const secret=Env.JWT_SECRET || "secret"
    try{
     const empty=isEmpty(loginUserDto)
     console.log(empty)
    if(empty==false){
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
       let token =jwt.sign({
         username:user.username,
         passwordHash:user.passwordHash,
         type:user.type,
         id:user.id
       }, secret, { expiresIn: "1h"});
       res.json({accessToken:token})
     }
        else {
          res.json({accessToken:""})
        }
      }
    })
    }catch(err:any){
      console.log(err)
      //const error=new Error("Login Information not provided or not existed",err)
      res.jsonp({message:err?.message})
    }
  } 
  else{
    throw new Error("Login Information not provided or not existed")
   
  }
   }
  catch(err:any){
   // const error=new Error("Login Information not provided or not existed",err)
    res.jsonp({message:err?.message})
  }
}
 
}
