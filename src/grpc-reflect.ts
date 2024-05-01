import {server,server2} from "./grpc";
import { loadPackageDefinition }  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
console.log(protoLoader,ReflectionService)
protoLoader.load("src/protos/src/*.proto").then((pkgd:any)=>{
  console.log(pkgd)
  //const reflection = new ReflectionService(pkgd);
 // reflection.addToServer(server2);
   // console.log(reflection)
}).catch(console.log)

/*
protoLoader.load("src/protos/src/user.proto").then(pkgd=>{
//console.log(pkgd)
  const reflection = new ReflectionService(pkgd);
  reflection.addToServer(server2);
    console.log(reflection)
}).catch(console.log)


protoLoader.load("src/protos/src/ticket.proto").then(pkgd=>{
//console.log(pkgd)
  const reflection = new ReflectionService(loadPackageDefinition(pkgd));
  reflection.addToServer(server);
    //console.log(reflection)
}).catch(console.log)


protoLoader.load("src/protos/src/user.proto").then(pkgd=>{
//console.log(pkgd)
  const reflection = new ReflectionService(loadPackageDefinition(pkgd));
  reflection.addToServer(server);
    //console.log(reflection)
}).catch(console.log)

protoLoader.load("src/protos/src/article.proto").then(pkgd=>{
//console.log(pkgd)
  const reflection = new ReflectionService(loadPackageDefinition(pkgd));
  reflection.addToServer(server);
    //console.log(reflection)
}).catch(console.log)

protoLoader.load("src/protos/src/auth.proto").then(pkgd=>{
//console.log(pkgd)
  const reflection = new ReflectionService(loadPackageDefinition(pkgd));
  reflection.addToServer(server);
    //console.log(reflection)
}).catch(console.log)
*/
