import { _Data } from "./datasource";
import { Payment,User} from "../entity/"
import { CreatePaymentDto } from "../dto/create-payment.dto"
import { PayTabService } from "../paytabs.service";

//@Injectable()
export class PaymentService extends _Data {
  private payTabService:PayTabService
  constructor (){
      super()
  }

  async all():Promise<Payment[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Payment)
  }

 async create(createPaymentDto: CreatePaymentDto):Promise<Payment|void>{
     
    const {purshasedItem,userid}=createPaymentDto
    /*let _article=<Article>{...article}
    let author=await this.datasource.manager.findOneByOrFail(Author,{id:parseInt(userid)})
    _article.author=author
    author.articles.push(_article)
    _article=await this.datasource.manager.save(Article,_article)
    return _article*/
   
 }

async pay(paymentId:string,urls:{callback:string,return:string}){
  let payment = await this.id(parseInt(paymentId))
  return await this.payTabService.createPage(payment,urls)

 }
}
