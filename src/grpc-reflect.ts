import "reflect-metadata";
import {server,server2} from "./grpc";
import { loadPackageDefinition }  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
console.log(protoLoader,ReflectionService)
async start(){
let pkgticket=await protoLoader.load("./src/protos/src/ticket.proto")
let pkgarticle=await protoLoader.load("./src/protos/src/article.proto")
let pkguser=await protoLoader.load("./src/protos/src/user.proto")
let pkgauth=await protoLoader.load("./src/protos/src/auth.proto")

const reflect=new ReflectionService(pkgticket,pkgarticle)
  reflect.addToServer(server)
}

server 
server2
start()
