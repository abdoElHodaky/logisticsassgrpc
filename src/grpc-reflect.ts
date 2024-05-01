import "reflect-metadata";
import {server,server2} from "./grpc";
import { loadPackageDefinition }  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
console.log(protoLoader,ReflectionService)
let pkg=protoLoader.load("./src/protos/src/*")
console.log(pkg)
