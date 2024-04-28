import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_User} from "../protos/dist/";
import  { Author } from "../entity/User";
//import { Service } from "./service.decorator"
import {services} from "./enum";
export class AuthorGrpcService  {
  
  
  static service:any=services.Author
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _User.UserServiceServer = {
   async all (call: ServerUnaryCall<_User.GetAllUserReq,_User.GetAllUserRes>,
    callback: sendUnaryData<_User.GetAllUserRes>
 ){
     let res:_User.GetAllUserRes
     try{
     let authors=await AuthorGrpcService.service.all()
       
    if(authors instanceof Array){ 
     let _authors=authors.map(_User.User.fromJSON)
     res={users:_authors,error:{
       Message:"",type:"",name:""
     }}
     callback({code:status.OK},res)}
     else{
       res={users:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }}
       callback({ code: status.NOT_FOUND }, res);
     }
    }
     catch(err){
       res= {users:[],error:{
        Message:"Some Internal Error",type:"InternalError",name:""
        }  }
       callback({ code: status.INTERNAL },res);
       console.error(err);
     }
      }
    , async create (
    call: ServerUnaryCall<_User.CreateUserReq,_User.CreateUserRes>,
    callback: sendUnaryData<_User.CreateUserRes>
  ){
       let {user}=call.request;
       let res:_User.CreateUserRes
       let base:_User.User=_User.createBaseUser()
       try{
       let author=await AuthorGrpcService.service.create(user);
       if(author instanceof Author){
         let _author=_User.User.fromJSON(author)
         res={
         user:_author/*,error:{
          Message:"",type:"",name:""
         }*/
        }
         callback({code:status.OK},res)}
       
       else{
         res={user: base
         /*,error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }*/}
         callback({ code: status.NOT_FOUND }, res);
       }
       }catch(err){
         res={user: base
         /*,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
         }  */}
         callback({ code: status.INTERNAL },res );
       }
     },
    async id(
      call: ServerUnaryCall<_User.GetUserIdReq,_User.GetUserIdRes>,
    callback: sendUnaryData<_User.GetUserIdRes>
    ){
      let {userId}=call.request
      let res:_User.GetUserIdRes
      let base:_User.User=_User.createBaseUser()

      try{
      let author=await AuthorGrpcService.service.id(userId)
      if (author instanceof Author){
      let _author=_User.User.fromJSON(author)
      res={
        user:_author,error:{
         Message:"",type:"",name:""
        }
      }
      callback({code:status.OK},res)}
      else{
        res={user: base
        ,error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }}
        callback({ code: status.NOT_FOUND }, res);
      }
           }
     catch(err){
      res={user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  }
      callback({ code: status.INTERNAL }, res);
     console.error(err);    
 
     }   
 
    }
  
  
  }

  
    

 }


//console.log(Reflect.getMetadata("service",AuthorGrpcService ))
