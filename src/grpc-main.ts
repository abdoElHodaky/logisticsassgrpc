import "reflect-metadata";
import {server,server2} from "./grpc";
import { loadPackageDefinition, ServerCredentials  }  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
protoLoader.load("./src/protos/src/index.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  
}).catch(console.log)
protoLoader.load("./src/protos/src/index.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server2)
  
}).catch(console.log)

server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })

server2.bindAsync('0.0.0.0:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server2 started")
    server2.start(); })

export default [server,server2]
