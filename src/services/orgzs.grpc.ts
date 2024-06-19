import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Orgz} from "../protos/dist/";
import {OrgzService} from "./";
import { Orgz } from "../entity/";

export class orgzGrpcService  {
  
// @Service("Ticket")
  static service:any=new OrgzService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Orgz.OrgzServiceServer = {
   
    async all (call: ServerUnaryCall<_Orgz.GetAllOrgzsReq,_Orgz.GetAllOrgzsRes>,
    callback: sendUnaryData<_Orgz.GetAllOrgzsRes>
 ){
     let orgzs=await orgzGrpcService.service.all(call.request?.ownerId)
     if(orgzs instanceof Array){
     let _orgzs=orgzs?.map(_Orgz.Orgz.fromJSON)
     //console.log(tickets)
    _orgzs.forEach((a:_Orgz.Orgz,inx:number)=>{
     let {owner,createdAt,updatedAt}=orgzs[inx]
     if(owner!=null) {
      a.ownerId=owner.id
      //console.log(a.createdAt instanceof Date)
     }
   // else { a.userId = Math.floor(Math.random()*21) }
     // a.createdAt=created_at
      //a.updatedAt=updated_at
     })
       let res:_Orgz.GetAllOrgzsRes={orgzs:_orgzs,error:{
       Message:"",type:"",name:""
     }}
        callback(null,res)
     }
     else{
       callback(null,{
           orgzs:[],
           error:{ Message:"No Records Matched",
           type:"NoTError",name:"Error" }
         })
     }
     
      },
    async create (
    call: ServerUnaryCall<_Orgz.CreateOrgzReq,_Orgz.CreateOrgzRes>,
    callback: sendUnaryData<_Orgz.CreateOrgzRes>
  ){
       let {ownerId,orgz}=call.request
       const supticket=_Orgz.Orgz.toJSON((orgz!=undefined)?orgz:_Orgz.createBaseOrgz())
       let _orgz=await orgzGrpcService.service.create(ownerId,orgz)
       if(_orgz instanceof Orgz){
        const orgz=_Orgz.Orgz.fromJSON(_orgz)
         orgz.ownerId=ownerId
         callback(null,{
           orgz:orgz
         })
       }
      else{
        callback(null,{
           orgz:_Orgz.createBaseOrgz()
         })
      }
     }
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
