<<<<<<< HEAD
import paytabs from "paytabs_pt2";
import { User } from "./entity/";
import { Payment } from "./entity/";
export class PayTabService{
  async values(obj){
=======
const paytabs =require("paytabs_pt2");
import { Payment , User} from "../entity/";
import { Env } from "../env";
const {PAYTABS_PROFILE,PAYTABS_SERVERK,PAYTABS_REGION}=Env

export class PayTabService{
  private result:object;
  async values(obj:any){
>>>>>>> mainrpc
      let arr=[]
      for(var i in obj){
        arr.push(obj[i])
      }
    return arr;
   }
   async config(profile:string,serverk:string,region:string):Promise<any>
    {
      await paytabs.setConfig(profile,serverk,region)
    }
<<<<<<< HEAD
   async createPage(payment:Payment,urls:any):Promise<any>{
    let res;
    let client=payment.by
    const {firstname,lastname,email,address}=client
    const {id,currency,amount,shipping}=payment
    const {title,...resship}=shipping
    let shippinginfo=resship
    let clientinfo=[firstname+" "+lastname,email,phone]
=======
   async createPage(payment:Payment,urls:{callback:string,return:string}):Promise<any>{
    let res;
    let client=payment.user
    const {firstName,lastName,email,address}=client
    const {id,currency,amount,shipping}=payment
    const {title,...resship}=shipping
    let shippinginfo=resship
    let clientinfo=[firstName+" "+lastName,email,"phone"]
>>>>>>> mainrpc
    let paymentinfo=[id,currency,amount,""]
    let _urls=[urls.callback,urls.return]
    await paytabs.createPaymentPage(['all'],['sale','ecom'],paymentinfo,
    clientinfo,shippinginfo,
<<<<<<< HEAD
    "AR",_urls,(result)=>{
       res=result
     })
     return  res.redirect_url
=======
    "AR",_urls,(result:any)=>{
       this.result= result
      return result?.redirect_url
     })
     
     
>>>>>>> mainrpc
     
   }
  async payCallback(result:any):Promise<any> {
    let {respCode,respMessage,transRef,respStatus,cart} =result
    return {
      trans:transRef,
      status:respStatus,
      code:respCode,
      message:respMessage,
      paymentId:cart.cart_id
    }
  }
  async payReturn(result:any):Promise<any>{
    let {respCode,respMessage,transRef,respStatus,cart} =result
    return {
      trans:transRef,
      status:respStatus,
      code:respCode,
      message:respMessage,
      paymentId:cart.cart_id
    }
  }
<<<<<<< HEAD
  async payVerify(transR:string){
    let valid=false;
    let res;
    paytabs.validatePayment(transR,result=>{
=======
  async payVerify(transR:string):Promise<any>{
    let valid=false;
    let res:any;
    paytabs.validatePayment(transR,(result:any)=>{
>>>>>>> mainrpc
      if (result['response_code:'] === 400)
    {
        valid=false
    }
    else
    {
        valid=true;
    }
         res=result
    });
<<<<<<< HEAD
    return {transRef:transR,code:res['response_code:'],valid:valid}
  }
 async start(){
    const {PAYTABS_PROFILE,PAYTABS_SERVERK,PAYTABS_REGION}=process.env
=======
    return await {transRef:transR,code:res['response_code:'],valid:valid}
  }
 async start(){
>>>>>>> mainrpc
    await paytabs.setConfig(
      PAYTABS_PROFILE,PAYTABS_SERVERK,PAYTABS_REGION
    )
  }
  
}
