import {
  Server,
  type UntypedServiceImplementation,
} from "@grpc/grpc-js";

export function addServiceToServer(
  server:Server,
  servicesImpls:Array<UntypedServiceImplementation>
){
  for (var impl of servicesImpls){
    
  }
}
