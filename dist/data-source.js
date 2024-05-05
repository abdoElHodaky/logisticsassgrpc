"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._datasource = exports.getDataSource = exports._AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const di_1 = require("@decorators/di");
const entity_1 = require("./entity/");
exports._AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "database.sqlite",
    cache: {
        duration: 300000
    },
    synchronize: true,
    logging: false,
    entities: [entity_1.User, entity_1.supTicket, entity_1.Article,
        entity_1.Verification, entity_1.Author, entity_1.Attachment, entity_1.Book, entity_1.Payment],
    migrations: [],
    subscribers: [],
    extra: {
        connectionTimeoutMillis: Number.MAX_SAFE_INTEGER,
        idleTimeoutMillis: Number.MAX_SAFE_INTEGER
    }
});
exports._AppDataSource.initialize()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Connection initialized with database...");
}))
    .catch((error) => console.log(error));
const getDataSource = (delay = 3000) => {
    if (exports._AppDataSource.isInitialized)
        return Promise.resolve(exports._AppDataSource);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exports._AppDataSource.isInitialized)
                resolve(exports._AppDataSource);
            else
                reject("Failed to create connection with database");
        }, delay);
    });
};
exports.getDataSource = getDataSource;
setInterval(function () {
    if (exports._AppDataSource.isConnected == false) {
        exports._AppDataSource.connect().then(e => {
            console.log("connected", e);
        }).catch(console.log);
    }
    else {
        console.log(" already connected");
    }
}, 500000);
exports._datasource = new di_1.InjectionToken("DataSource");
