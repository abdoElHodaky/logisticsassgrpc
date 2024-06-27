import "reflect-metadata";
import { sendUnaryData, ServerUnaryCall, status, UntypedHandleCall ,handleUnaryCall} from "@grpc/grpc-js";
import  {_Product,_Subscription} from "../protos/dist/";
import {ProductService} from "./";
import { Product,Subscription } from "../entity/";
import {plainToClass} from "class-transformer";
import {CreateSubscriptionDto,CreateProductDto} from "../dto/";
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
       const dto=plainToClass(CreateProductDto,_Product.CreateProductReq.toJSON(call.request))
       let _product=await ProductGrpcService.service.create(dto)
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
      const dto=plainToClass(CreateSubscriptionDto,_Product.SubscribeProductReq.toJSON(call.request))
      let subscription=await ProductGrpcService.service.subscribe(dto)
      if(subscription instanceof Subscription){
        const _subscription=_Subscription.Subscription.fromJSON(subscription)
         _subscription.userId=call.request?.userId
         _subscription.productsIds=subscription.products.map(p=>p.id)
         callback(null,{
           userId:call.request?.userId,
           subscription:_subscription
         })
       }
      else{
        callback(null,{
           userId:call.request?.userId,
           subscription:_Subscription.createBaseSubscription()
         })
      } 
      
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
