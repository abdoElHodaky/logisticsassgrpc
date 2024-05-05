"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const grpc_1 = require("./grpc");
const grpc_js_1 = require("@grpc/grpc-js");
const reflection_1 = require("@grpc/reflection");
const protoLoader = require('@grpc/proto-loader');
//console.log(protoLoader,ReflectionService)
protoLoader.load("./src/protos/src/index.proto").then((pkg) => {
    pkg = (0, grpc_js_1.loadPackageDefinition)(pkg);
    const reflect = new reflection_1.ReflectionService(pkg);
    reflect.addToServer(grpc_1.server);
    //console.log(reflect,pkg) 
}).catch(console.log);
protoLoader.load("./src/protos/src/index.proto").then((pkg) => {
    pkg = (0, grpc_js_1.loadPackageDefinition)(pkg);
    const reflect = new reflection_1.ReflectionService(pkg);
    reflect.addToServer(grpc_1.server2);
    // console.log(reflect) 
}).catch(console.log);
grpc_1.server.bindAsync('0.0.0.0:51', grpc_js_1.ServerCredentials.createInsecure(), () => {
    console.log("Server started");
    grpc_1.server.start();
});
grpc_1.server2.bindAsync('0.0.0.0:30', grpc_js_1.ServerCredentials.createInsecure(), () => {
    console.log("Server2 started");
    grpc_1.server2.start();
});
//export {server,server2}
