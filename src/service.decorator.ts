//import * as services from "./services/enum"
import "reflect-metadata";
//let servs=services

export function Service(servname: string): Function {
    return function (target: any, propertyKey: string, descriptor?: PropertyDescriptor) {
     /*  const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            return `${prefix} ${result.toUpperCase()}`;
        };
    };*/
        
    import("./services/enum").then(servs=>{
        const {_services}=servs
        let keys=Object.keys(_services)
        let values=Object.values(_services)
        let inx=keys.indexOf(servname)
        console.log(values[inx])
    }).catch(console.log)
    
   
   
  }
}
/*export function getService(target: any, propertyKey: string):any {
    let serv=Reflect.getMetadata(servkey, target, propertyKey);
    console.log(serv)
    return {}

}*/
