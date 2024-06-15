import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Orgz} from "../protos/dist/";
import { services }from "./enum";
import { Orgz } from "../entity/";
//console.log(services)
export class orgzGrpcService  {
  
// @Service("Ticket")
  static service:any=services.Orgz
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Orgz.OrgzServiceServer = {
   
     async create (
    call: ServerUnaryCall<_Orgz.CreateOrgzReq,_Orgz.CreateOrgzRes>,
    callback: sendUnaryData<_Orgz.CreateOrgzRes>
  ){
       let {userId,orgz}=call.request
       const supticket=_Orgz.Orgz.toJSON((orgz!=undefined)?orgz:_Orgz.createBaseOrgz())
       let _orgz=await orgzGrpcService.service.create(userId,orgz)
       if(_orgz instanceof Orgz){
        const orgz=_Orgz.Orgz.fromJSON(_orgz)
         orgz.OwnerId=parseInt(userId)
         callback(null,{
           orgz:orgz
         })
       }
      else{
        callback(null,{
           orgz:_Orgz.createBaseOrgz()
         })
      }
     },
    async all (call: ServerUnaryCall<_Orgz.GetAllOrgzsReq,_Orgz.GetAllOrgzsRes>,
    callback: sendUnaryData<_Orgz.GetAllOrgzsRes>
 ){
     let orgzs=await orgzGrpcService.service.all()
     //console.log(tickets)
     let _orgzs=tickets.map(_Orgz.Orgz.fromJSON)
     //console.log(tickets)
    _orgzs.forEach((a:_Orgz.Orgz,inx:number)=>{
     let {user,createdAt,updatedAt}=orgzs[inx]
     if(user!=null) {
      a.OwnerId=user.id
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
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
