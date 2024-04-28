import {services} from "./services/enum"
import "reflect-metadata";
console.log(services)

export function Service(servname: string): Function {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
     /*  const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return `${prefix} ${result.toUpperCase()}`;
        };
    };*/
        
    target[propertyKey]=services[servname]
    console.log(target,propertyKey)
    console.log(servname)
   
  }
}
/*export function getService(target: any, propertyKey: string):any {
    let serv=Reflect.getMetadata(servkey, target, propertyKey);
    console.log(serv)
    return {}

}*/
