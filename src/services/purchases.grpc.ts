import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Purshase} from "../protos/dist/";
import {PurahaseService} from "./";
import { Purshase,PurshaseItem } from "../entity/";
import {plainToClass} from "class-transformer";
import {CreatePurshaseDto} from "../dto/";
export class PurshaseGrpcService  {
  
// @Service("Ticket")
  static service:any=new PurahaseService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Purshase.PurshaseServiceServer = {
   
    async all (call: ServerUnaryCall<_Purshase.GetAllPurshaseReq,_Purshase.GetAllPurshaseRes>,
    callback: sendUnaryData<_Purshase.GetAllPurshaseRes>
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
       
       let res:_Purshase.GetAllPurshaseRes={userId:call.request?.userId,
      purchases:_purchases,
        //error:{ Message:"",type:"",name:""}
      }
        callback(null,res)
     }
     else{
       callback(null,{
           purchases:[],
          // error:{ Message:"No Records Matched",type:"NotFoundError",name:"" }
         })
     }
     
      },
    async create (
    call: ServerUnaryCall<_Purshase.CreatePurshaseReq,_Purshase.CreatePurshaseRes>,
    callback: sendUnaryData<_Purshase.CreatePurshaseRes>
  ){
    const dto= plainToClass(CreatePurshaseDto,_Purshase.CreatePurshaseReq.toJSON(call.request))
      let _purshase=await PurshaseGrpcService.service.create(dto)
       if(_purshase instanceof Purshase){
        const purshase=_Purshase.Purshase.fromJSON(_purshase)
        // purshase.userId=call.request?.userId
         callback(null,{
           purchase:purshase
         })
       }
      else{
        callback(null,{
           purchase:_Purshase.createBasePurshase()
         })
      } 
     }
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
