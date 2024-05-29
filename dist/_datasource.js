"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._datasource = exports.AppDataSource = void 0;
const data_source_1 = require("./data-source");
exports.AppDataSource = data_source_1._AppDataSource;
var data_source_2 = require("./data-source");
Object.defineProperty(exports, "_datasource", { enumerable: true, get: function () { return data_source_2._datasource; } });
/*getDataSource(1000).then(d=>{
 AppDataSource=d

}).catch(console.log);*/
