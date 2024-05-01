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
  console.log(reflect,pkg) 
}).catch(console.log)
protoLoader.load("./src/protos/src/user.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  console.log(reflect,pkg) 
}).catch(console.log)
protoLoader.load("./src/protos/src/auth.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  console.log(reflect,pkg) 
}).catch(console.log)
protoLoader.load("./src/protos/src/article.proto").then((pkg:any)=>{
  pkg=loadPackageDefinition(pkg)
  const reflect=new ReflectionService(pkg)
  reflect.addToServer(server)
  console.log(reflect,pkg) 
}).catch(console.log)
