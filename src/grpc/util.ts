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

export function transformDate/*<T extends ClassConstructor<any>>*/(entity:object){
 // let _obj=classToPlain(entity)
  let _obj=entity;
  for(var i of _obj){
    if(i instanceof Array){
      i=i.map((e:object)=>{
        const {createdAt,updatedAt}=e
        return {
          ...e,
          createdAt:dateToReadable(createdAt),
          updatedAt:dateToReadable(updatedAt)
        }
      })
    }
  }
  return _obj
}
