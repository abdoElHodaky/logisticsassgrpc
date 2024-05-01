import "reflect-metadata";
import {server,server2} from "./grpc";
import { loadPackageDefinition }  from "@grpc/grpc-js";
import { ReflectionService } from '@grpc/reflection';
const protoLoader = require('@grpc/proto-loader');
console.log(protoLoader,ReflectionService)
protoLoader.load("./src/protos/src/ticket.proto")
protoLoader.load("./src/protos/src/article.proto")
protoLoader.load("./src/protos/src/user.proto")
protoLoader.load("./src/protos/src/auth.proto")
console.log(protoLoader)
