import * as services from "./services/"
import "reflect-metadata";
let servs=services

export function Service(servname: string): Function {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
     /*  const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return `${prefix} ${result.toUpperCase()}`;
        };
    };*/
        
    
    console.log(target?.propertyKey)
  //  console.log(services.Auth)
   
  }
}
/*export function getService(target: any, propertyKey: string):any {
    let serv=Reflect.getMetadata(servkey, target, propertyKey);
    console.log(serv)
    return {}

}*/
