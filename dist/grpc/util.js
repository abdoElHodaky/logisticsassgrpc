"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformDate = exports.dateToReadable = exports.addServiceToServer = void 0;
//import { ClassConstructor, plainToClass ,classToPlain } from "class-transformer";
function addServiceToServer(server, services, Impls) {
    for (var i in Impls) {
        server.addService(services[i], Impls[i]);
    }
    return server;
}
exports.addServiceToServer = addServiceToServer;
function dateToReadable(date) {
    var moment = require('moment');
    require('moment/locale/ar');
    let m = moment(date);
    //console.log(moment.locale());
    return m.format("dddd, MMMM Do YYYY, h:mm:ss a");
}
exports.dateToReadable = dateToReadable;
function transformDate /*<T extends ClassConstructor<any>>*/(entity) {
    // let _obj=classToPlain(entity)
    let _obj = entity;
    for (var i of _obj) {
        if (i instanceof Array) {
            i = i.map((e) => {
                const { createdAt, updatedAt } = e;
                return Object.assign(Object.assign({}, e), { createdAt: dateToReadable(createdAt), updatedAt: dateToReadable(updatedAt) });
            });
        }
    }
    return _obj;
}
exports.transformDate = transformDate;
