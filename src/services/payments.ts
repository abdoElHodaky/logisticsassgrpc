import { _Data } from "./datasource";
import { Payment,User,Purshase} from "../entity/"
import { PaymentStatus} from "../entity/Payment";
import { CreatePaymentDto } from "../dto/create-payment.dto"
import { PayTabService } from "./";
import { NotFoundError ,Error ,TypeError } from "common-errors";
import { isNumeric } from "../helpers";
//@Injectable()
export class PaymentService extends _Data {
 // @service("PayTabGate")
  private payTabService=new PayTabService()
  constructor (){
      super()
     // this.payTabService.start()
  }

  async all(userId?:number):Promise<Payment[]|Error>
  {
 //  if(isNumeric(userId)==true){
    try
  {
    let payments= await this.em.find(Payment,{
      where: (userId!=undefined)?{ user: { id: userId } }:{}})
     if (payments.length!=0) return payments
     else throw new NotFoundError("Payments")
  }
    catch(err:any){
      // console.log(err)
       return err
      }
  // }
 //  else return new TypeError("userId should be number")
  }

 async create(createDto: CreatePaymentDto):Promise<Payment|void>{
     const {purshaseId}=createDto
     const purchase=await this.em.findOneOrFail(Purshase,{
      where:{id:purshaseId}
   })
    const payment = new Payment()
    payment.purchase=purchase
    payment.status=PaymentStatus.PAYMENT_PENDING
    payment.user=purchase.user
    return await this.em.save(Payment,payment)
   
 }

async pay(paymentId:string,urls:{callback:string,return:string}){
  let payment = await  this.em.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
  return await this.payTabService.createPage(payment,urls)

 }

async payCallback(result:any):Promise<any>{
   return await this.payTabService.payCallback(result)
}

async verify(transR:string,paymentId:string):Promise<any>{
    let res= await this.payTabService.payVerify(transR)
    let { valid,code }=res
    if (valid===true){
      let payment=await this.em.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
      payment.status=PaymentStatus.PAYMENT_PAID
      payment.transR=transR
      await this.em.save(Payment,payment)
      return {message:"Payment success , Thanks"}

    }
    else{
      return res
    }
    
  }

  
}
