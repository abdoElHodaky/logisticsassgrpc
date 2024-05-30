import {
  Server,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

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

export dateToReadable(date:Date){
  var moment = require('moment');
  require('moment/locale/ar');
  let m=moment(date)
  console.log(moment.locale());
}
