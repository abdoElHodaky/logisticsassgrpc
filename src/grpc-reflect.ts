import "reflect-metadata";
import {server,server2} from "./grpc";
import { loadPackageDefinition }  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
//console.log(protoLoader,ReflectionService)

protoLoader.load("./src/protos/src/article.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  
 // console.log(reflect,pkg) 
}).catch(console.log)
protoLoader.load("./src/protos/src/user.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  const reflect2=new ReflectionService(pkg)
  reflect.addToServer(server)
  reflect2.addToServer(server2)
 // console.log(reflect,pkg) 
}).catch(console.log)
protoLoader.load("./src/protos/src/auth.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  //console.log(reflect,pkg) 
}).catch(console.log)
protoLoader.load("./src/protos/src/ticket.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  const reflect2=new ReflectionService(pkg)
  reflect.addToServer(server)
  reflect2.addToServer(server2)
  //console.log(reflect,pkg) 
}).catch(console.log)


server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
    console.log("Server started")
    server.start(); })

server2.bindAsync('0.0.0.0:3030', ServerCredentials.createInsecure(), () => {
    console.log("Server2 started")
    server2.start(); })

