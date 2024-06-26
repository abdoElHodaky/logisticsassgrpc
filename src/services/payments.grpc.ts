import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Payment} from "../protos/dist/";
import {PaymentService} from "./";
import { Payment} from "../entity/";

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
         products:_payments,
       // error:{ Message:"",type:"",name:""}
        }
        callback(null,res)
     }
     else{
       callback(null,{
           userId:call.request.userId,
           products:[],
          // error:{ Message:"No Records Matched",type:"NotFoundError",name:"" }
         })
     }
     
      },
    async create (
    call: ServerUnaryCall<_Payment.CreatePayReq,_Payment.CreatePayRes>,
    callback: sendUnaryData<_Payment.CreatePayRes>
  ){
     //  let {userId,product}=call.request
       
      // const supticket=_Product.Product.toJSON((product!=undefined)?product:_Product.createBaseProduct())
       let _product=await PaymentGrpcService.service.create(_Payment.CreatePayReq.toJSON(call.request))
       if(_product instanceof Payment){
        const product=_Payment.Payment.fromJSON(_product)
         product.userId=call.request?.userId
         callback(null,{
           payment:product
         })
       }
      else{
        callback(null,{
           payment:_Payment.createBasePayment()
         })
      } 
     }
    
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
