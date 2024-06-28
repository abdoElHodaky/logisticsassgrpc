import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Payment} from "../protos/dist/";
import {PaymentService} from "./";
import { Payment} from "../entity/";
import {plainToClass} from "class-transformer";
import {CreatePaymentDto} from "../dto/";
export class PaymentGrpcService  {
  
// @Service("Ticket")
  static service:any=new PaymentService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Payment.PaymentServiceServer = {
   
    async all (call: ServerUnaryCall<_Payment.GetAllPayReq,_Payment.GetAllPayRes>,
    callback: sendUnaryData<_Payment.GetAllPayRes>
 ){
     let payments=await PaymentGrpcService.service.all(call.request.userId)
     if(payments instanceof Array){
     let _payments=payments.map(_Payment.Payment.fromJSON)
     //console.log(tickets)
    _payments.forEach((a:_Payment.Payment,inx:number)=>{
     let {user,createdAt,updatedAt}=payments[inx]
     if(user!=null) {
      a.userId=user.id
      //console.log(a.createdAt instanceof Date)
     }
     })
       
       let res:_Payment.GetAllPayRes={
         userId:call.request.userId,
         payments:_payments,
       // error:{ Message:"",type:"",name:""}
        }
        callback(null,res)
     }
     else{
       callback(null,{
           userId:call.request.userId,
           payments:[],
          // error:{ Message:"No Records Matched",type:"NotFoundError",name:"" }
         })
     }
     
      },
    async create (
    call: ServerUnaryCall<_Payment.CreatePaymentReq,_Payment.CreatePaymentRes>,
    callback: sendUnaryData<_Payment.CreatePaymentRes>
  ){
     let dto=plainToClass(CreatePaymentDto,_Payment.CreatePaymentReq.toJSON(call.request))
      
      let _payment=await PaymentGrpcService.service.create(dto)
       if(_payment instanceof Payment){
        const payment=_Payment.Payment.fromJSON(_payment)
         payment.userId=dto.userId
         callback(null,{
           payment:payment
         })
       }
      else{
        callback(null,{
           payment:_Payment.createBasePayment()
         })
      } 
     },
    async result(
      call: ServerUnaryCall<_Payment.GetPayResultReq,_Payment.GetPayResultRes>,
      callback: sendUnaryData<_Payment.GetPayResultRes>
    ){}
    
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
