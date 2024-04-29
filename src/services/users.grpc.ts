
import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_User} from "../protos/dist/";
import  { User } from "../entity/User";
//import { Service } from "./service.decorator"
import {UserService} from "./";
export class UserGrpcService  {
  
  
  static service:any=new UserService()
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
     let users=await UserGrpcService.service.all()
       //console.log(authors.map(JSON.stringify))
    if(users instanceof Array){ 
     
     let _users=users.map(_User.User.fromJSON)
     _users.forEach((e,inx)=>{
       /*if(articles.length!=0) articles=articles.map(a=>a.authorId=id)
       if(tickets.length!=0) tickets=tickets.map(a=>a.userId=id)*/
       for (var i of e){
         if(i instanceof Array && i?.length!=0){
           i=i.map(a=>{
             let prop=a.keys().filter(p=>p.includes("Id"))
             prop.forEach(k=>{
               a[k]=id
             })
           })
         }
       }
    
     })
     // console.log(_authors)
      const res:_User.GetAllUserRes={
          users:_users,
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
       let __user=await UserGrpcService.service.create(user);
       if(__user instanceof User){
         let _user=_User.User.fromJSON(__user)
         res={
         user:_user/*,error:{
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
      let user=await UserGrpcService.service.id(userId)
      if (user instanceof User){
      let _user=_User.User.fromJSON(user)
      res={
        user:_user,error:{
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
