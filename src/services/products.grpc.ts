import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Product} from "../protos/dist/";
import {ProductService} from "./";
import { Product } from "../entity/";

export class ProductGrpcService  {
  
// @Service("Ticket")
  static service:any=new ProductService()
  //public [name: string]:UntypedHandleCall;
  public SrvImpl: _Product.ProductServiceServer = {
   
    async all (call: ServerUnaryCall<_Product.GetAllProductsReq,_Product.GetAllProductsRes>,
    callback: sendUnaryData<_Product.GetAllProductsRes>
 ){
     let products=await ProductGrpcService.service.all()
     if(products instanceof Array){
     let _products=products.map(_Product.Product.fromJSON)
     //console.log(tickets)
    _products.forEach((a:_Product.Product,inx:number)=>{
     let {user,createdAt,updatedAt}=products[inx]
     if(user!=null) {
      a.userId=user.id
      //console.log(a.createdAt instanceof Date)
     }
     })
       
       let res:_Product.GetAllProductsRes={products:_products,error:{
       Message:"",type:"",name:""}}
        callback(null,res)
     }
     else{
       callback(null,{
           products:[],
           error:{ Message:"No Records Matched",type:"NotFoundError",name:"" }
         })
     }
     
      },
    async create (
    call: ServerUnaryCall<_Product.CreateProductReq,_Product.CreateProductRes>,
    callback: sendUnaryData<_Product.CreateProductRes>
  ){
     //  let {userId,product}=call.request
       
      // const supticket=_Product.Product.toJSON((product!=undefined)?product:_Product.createBaseProduct())
       let _product=await ProductGrpcService.service.create(_Product.CreateProductReq.toJSON(call.request))
       if(_product instanceof Product){
        const product=_Product.Product.fromJSON(_product)
         product.userId=call.request?.userId
         callback(null,{
           product:product
         })
       }
      else{
        callback(null,{
           product:_Product.createBaseProduct()
         })
      } 
     },
    async subscribe(
      call: ServerUnaryCall<_Product.SubscribeProductReq,_Product.SubscribeProductRes>,
      callback: sendUnaryData<_Product.SubscribeProductRes>)
    {
      
    },
    async allSubscriptions(
      call: ServerUnaryCall<_Product.GetAllProductsSubscriptionsReq,_Product.GetAllProductsSubscriptionsRes>,
      callback: sendUnaryData<_Product.GetAllProductsSubscriptionsRes>)
    {
      
    }
  }

  
   }
//console.log(services)
//console.log(Reflect.getMetadata("servname",ArticleGrpcService.service ))
