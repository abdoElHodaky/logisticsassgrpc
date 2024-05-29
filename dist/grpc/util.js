"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addServiceToServer = void 0;
function addServiceToServer(server, services, Impls) {
    for (var i in Impls) {
        server.addService(services[i], Impls[i]);
    }
    return server;
}
exports.addServiceToServer = addServiceToServer;
