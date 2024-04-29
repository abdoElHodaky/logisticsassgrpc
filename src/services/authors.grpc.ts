import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_User, _Article,_Ticket} from "../protos/dist/";
import  { Author } from "../entity/User";
//import { Service } from "./service.decorator"
import {AuthorService} from "./";
export class AuthorGrpcService  {
  
  
  static service:any=new AuthorService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _User.UserServiceServer = {
   async all (call: ServerUnaryCall<_User.GetAllUserReq,_User.GetAllUserRes>,
    callback: sendUnaryData<_User.GetAllUserRes>
 ){
     let base:_User.User=_User.createBaseUser()
    /* let res:_User.GetAllUserRes={
       users:[],
       error:{
       Message:"",type:"",name:""
      }
     }*/
     try{
     let authors=await AuthorGrpcService.service.all()
       //console.log(authors.map(JSON.stringify))
    if(authors instanceof Array){ 
     
     let _authors=authors.map(_User.User.fromJSON)
     // console.log(_authors)
      _authors.forEach(({id,articles},inx)=>{
        if(articles.length!=0) articles=articles.map(a=>a.userId=id).sort(function(a, b) {return (a.id < b.id);})
      })
      const res:_User.GetAllUserRes={
          users:_authors,
          error:{
            Message:"",name:"",type:""
          }
         }
         callback(null,res)
     }
     else{
      callback({ code: status.NOT_FOUND }, {users:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
     }
    }
     catch(err){
       callback({ code: status.NOT_FOUND }, {users:[],error:{
            Message:"No Records matching request",type:"NotFoundError",name:""
          }});
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
         callback({ code: status.NOT_FOUND }, {user:base});
       }
       }catch(err){
         res={user: base
         /*,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
         }  */}
         callback({ code: status.INTERNAL },{user:base} );
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
        callback({ code: status.NOT_FOUND }, {user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  });
      }
           }
     catch(err){
      res={user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  }
      callback({ code: status.INTERNAL }, {user: base
      ,error:{
        Message:"Some Internal Error",type:"InternalError",name:""
       }  });
     console.error(err);    
 
     }   
 
    }
  
  
  }

  
    

 }


//console.log(Reflect.getMetadata("service",AuthorGrpcService ))
