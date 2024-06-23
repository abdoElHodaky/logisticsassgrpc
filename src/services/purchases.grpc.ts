import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Purshase} from "../protos/dist/";
import {PurahaseService} from "./";
import { Purshase,PurshaseItem } from "../entity/";

export class PurshaseGrpcService  {
  
// @Service("Ticket")
  static service:any=new PurahaseService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Purshase.PurshaseServiceServer = {
   
    async all (call: ServerUnaryCall<_Purshase.GetAllPurshasesReq,_Purshase.GetAllPurshasesRes>,
    callback: sendUnaryData<_Purshase.GetAllPurshasesRes>
 ){
     let purchases=await PurshaseGrpcService.service.all(call.request?.userId)
     if(purchases instanceof Array){
     let _purchases=purchases.map(_Purshase.Purshase.fromJSON)
     //console.log(tickets)
    _purchases.forEach((a:_Purshase.Purshase,inx:number)=>{
     let {user,createdAt,updatedAt}=purchases[inx]
     if(user!=null) {
      a.userId=user.id
      //console.log(a.createdAt instanceof Date)
     }
     })
       
       let res:_Purshase.GetAllPurshasesRes={userId:call.request?.userId,
      purshases:_products,error:{
       Message:"",type:"",name:""}}
        callback(null,res)
     }
     else{
       callback(null,{
           purchases:[],
           error:{ Message:"No Records Matched",type:"NotFoundError",name:"" }
         })
     }
     
      },
    async create (
    call: ServerUnaryCall<_Purshase.CreatePurshaseReq,_Purshase.CreatePurshaseRes>,
    callback: sendUnaryData<_Purshase.CreatePurshaseRes>
  ){
     //  let {userId,product}=call.request
       
      // const supticket=_Product.Product.toJSON((product!=undefined)?product:_Product.createBaseProduct())
       let _purshase=await PurshaseGrpcService.service.create(_Purshase.CreatePurshaseReq.toJSON(call.request))
       if(_purchase instanceof Purshase){
        const purshase=_Purshase.Purshase.fromJSON(_purshase)
         purshase.userId=call.request?.userId
         callback(null,{
           purshase:purshase
         })
       }
      else{
        callback(null,{
           purshase:_Product.createBasePurshase()
         })
      } 
     }
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
