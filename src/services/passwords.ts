import { _Data } from "./datasource";
import { Password,User,Author } from "../entity/"
import { UserService } from "./users/"

//@Injectable()
export class PasswordService extends _Data {
  private userS:any=new UserService()
  constructor (){
      super()
  }

  async all():Promise<Password[]>
  {
    //console.log(this._source)
    return await this.datasource.manager.find(Password,{
      relations:{
        user:true
      },
      cache:true
    })
  }

 async create(passwordto:{userId:number,passphase:string}):Promise<Article|void>{
     
   // const {userId,article}=articlecdto
    let _password=this.datasource.manager.create(Password,{
       passphase:passphase
    })
     _password.user=this.userS.id(`${userId}`)
     await this.datasource.manager.save(Password,_password)
     console.log("DataS ",_password)
    
    return _password
   
 }
}
