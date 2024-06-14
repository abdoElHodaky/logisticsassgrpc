import {
  Server,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";
//import { ClassConstructor, plainToClass ,classToPlain } from "class-transformer";

export function addServiceToServer(
  server:Server,
  services:Array<any>,
  Impls:Array<UntypedServiceImplementation>
){
  for (var i in Impls){
    server.addService(services[i],Impls[i])
  }
  return server
}

export function dateToReadable(date:Date|string){
  var moment = require('moment');
  require('moment/locale/ar');
  let m=moment(date)
  //console.log(moment.locale());
  return m.format("dddd, MMMM Do YYYY, h:mm:ss a")
}

export function transformDate/*<T extends ClassConstructor<any>>*/(entity:object,
fieldsnames:string[]=["createdAt","updatedAt"]){
 // let _obj=classToPlain(entity)
  let _obj=entity;
  fieldsnames.forEach((e:string,inx:number)=>{
    _obj[e]=dateToReadable(_obj[e])
  })
  return _obj
}
