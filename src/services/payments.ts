import { _Data } from "./datasource";
import { Payment,User} from "../entity/"
import { CreatePaymemtDto } from "../dto/create-payment.dto"
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

  async all(userId:string):Promise<Payment[]|Error>
  {
   if(isNumeric(userId)==true){
    try
  {
    let payments= await this.datasource.manager.find(Payment,{
      where:{
        user_id:parseInt(userId)
      }
       })
      }catch(err:any){
       return new NotFoundError("Payments")
      }
   }
   else return new TypeError("userId should be number")
  }

 async create(createPaymentDto: CreatePaymemtDto):Promise<Payment|void>{
     
    //const {purshasedItem,userid}=createPaymentDto
    //let _article=<Payment>{...payment}
    /*let user=await this.datasource.manager.findOneByOrFail(User,{id:parseInt(userid)})
    _article.by=author
    author.payments.push(_article)
    _article=await this.datasource.manager.save(Payment,_article)
    return _article*/ return
   
 }

async pay(paymentId:string,urls:{callback:string,return:string}){
  let payment = await  this.datasource.manager.findOneOrFail(Payment,{
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
      let payment=await this.datasource.manager.findOneOrFail(Payment,{
        where:{id:parseInt(paymentId)}
      })
      payment.status="paid"
      payment.transR=transR
      await this.datasource.manager.save(Payment,payment)
      return {message:"Payment success , Thanks"}

    }
    else{
      return res
    }
    
  }

  
}
