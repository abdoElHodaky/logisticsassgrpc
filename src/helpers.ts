export function isNumeric(value:string) {
    return /^\d+$/.test(value);
  }

export function nationalIdvalid(value:string){
    const message=value
    const pattern=/^([1-9]{1})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})[0-9]{3}([0-9]{1})[0-9]{1}$/
    return (pattern.test(message));
   }

export function isEmpty(obj:any):boolean{
    return Object.values(obj).some(o=> o==null || o=="")
}

export function genVerfCode(){
    const {randomInt}=require("crypto")
    return randomInt(0, 1000000)toString().padStart(6, "0");
}
