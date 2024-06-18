"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const grpc_1 = require("./grpc");
const grpc_js_1 = require("@grpc/grpc-js");
const reflection_1 = require("@grpc/reflection");
const env_1 = require("../env");
const { GRPCSONEPORT, GRPCSTWOPORT } = env_1.Env;
const protoLoader = require('@grpc/proto-loader');
protoLoader.load("src/protos/src/serverreflect.proto").then((pkg) => {
    pkg = (0, grpc_js_1.loadPackageDefinition)(pkg);
    const reflect = new reflection_1.ReflectionService(pkg);
    reflect.addToServer(grpc_1.server);
}).catch(console.log);
protoLoader.load("src/protos/src/servereflect.proto").then((pkg) => {
    pkg = (0, grpc_js_1.loadPackageDefinition)(pkg);
    const reflect = new reflection_1.ReflectionService(pkg);
    reflect.addToServer(grpc_1.server2);
}).catch(console.log);
grpc_1.server.bindAsync(`0.0.0.0:${GRPCSONEPORT}`, grpc_js_1.ServerCredentials.createInsecure(), () => {
    console.log("Server started");
    grpc_1.server.start();
});
grpc_1.server2.bindAsync(`0.0.0.0:${GRPCSTWOPORT}`, grpc_js_1.ServerCredentials.createInsecure(), () => {
    console.log("Server2 started");
    grpc_1.server2.start();
});
exports.default = { server: grpc_1.server, server2: grpc_1.server2 };
