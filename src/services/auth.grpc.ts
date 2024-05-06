import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall, handleUnaryCall } from "@grpc/grpc-js";
import  {_Auth,_User} from "../protos/dist/";
import { User } from "../entity/";
import {AuthService} from "./";
//import { Service} from "../service.decorator";
export class AuthGrpcService {
  
  //@Service("Auth")
  static service:any=new AuthService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Auth.AuthServiceServer = {
 
  register: async (call: ServerUnaryCall<_Auth.RegisterUserReq,_Auth.RegisterUserRes>,
    callback: sendUnaryData<_Auth.RegisterUserRes>
 )=>{
    
     let user=await  AuthGrpcService.service.create(call.request["user"])
      let res:_Auth.RegisterUserRes={user:user,error:{
       Message:"",type:"",name:""
     }}
     callback(null,res)
      }

  ,
   login:async  (
    call: ServerUnaryCall<_Auth.LoginUserReq,_Auth.LoginUserRes>,
    callback: sendUnaryData<_Auth.LoginUserRes>
  )=>{
    const {username,passwordHash}=call.request
     try{
       let user=await AuthGrpcService.service.login({username:username,passwordHash:passwordHash})
       if(user instanceof User)
       {
        let _user=_User.User.fromJSON(user)
        callback(null,{
          user:_user,
          error:{
            Message:"",type:"",name:""
          }
        })
       }
       else{
         callback(null, {user:_User.createBaseUser()(),error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
       }
     }catch(err){
       callback({code:status.INTERNAL},{user:_User.createBaseUser(),error:{
        Message:"Some Internet Error",type:"InternalError",name:""
     }  });
     console.error(err);
     }
   }
  }
  
    
/*static  async _all (call: ServerUnaryCall<_Article.GetAllReq,_Article.GetAllRes>,
    callback: sendUnaryData<_Article.GetAllRes>
 ){
  let articles=await this.artclS.all()
  let _articles=articles.map(_Article.Article.fromJSON)
  console.log(_articles)
  }

static  async _create(
    call: ServerUnaryCall<_Article.CreateReq,_Article.CreateRes>,
    callback: sendUnaryData<_Article.CreateRes>
  ){}
    */
}
