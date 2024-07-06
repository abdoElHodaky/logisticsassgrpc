import { _Data } from "./datasource";
<<<<<<< HEAD
import { Payment,User} from "../entity/"
import { CreatePaymentDto } from "../dto/create-payment.dto"
import { service } from "./";

//@Injectable()
export class PaymentService extends _Data {
  @service("PayTabGate")
  private payTabService
  constructor (){
      this.payTabService.start()
      super()
  }

  async all():Promise<Payment[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Payment)
  }

 async create(createPaymentDto: CreatePaymentDto):Promise<Payment|void>{
     
    const {purshasedItem,userid}=createPaymentDto
    let _article=<Payment>{...payment}
    let author=await this.datasource.manager.findOneByOrFail(User,{id:parseInt(userid)})
    _article.by=author
    author.payments.push(_article)
    _article=await this.datasource.manager.save(Payment,_article)
    return _article
=======
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
>>>>>>> mainrpc
   
 }

async pay(paymentId:string,urls:{callback:string,return:string}){
<<<<<<< HEAD
  let payment = await this.id(parseInt(paymentId))
=======
  let payment = await  this.em.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
>>>>>>> mainrpc
  return await this.payTabService.createPage(payment,urls)

 }

async payCallback(result:any):Promise<any>{
   return await this.payTabService.payCallback(result)
}

async verify(transR:string,paymentId:string):Promise<any>{
    let res= await this.payTabService.payVerify(transR)
    let { valid,code }=res
    if (valid===true){
<<<<<<< HEAD
      let payment=await this.datasource.find(Payment,{
        where:{id:parseInt(paymentId)}
      })
      payment.status="paid"
      payment.transR=transR
      await payment.save()
=======
      let payment=await this.em.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
      payment.status=PaymentStatus.PAYMENT_PAID
      payment.transR=transR
      await this.em.save(Payment,payment)
>>>>>>> mainrpc
      return {message:"Payment success , Thanks"}

    }
    else{
      return res
    }
    
  }

  
}
