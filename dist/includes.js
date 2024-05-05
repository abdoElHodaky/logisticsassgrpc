"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._datasource = exports.AppDataSource = exports.DataSource = void 0;
var typeorm_1 = require("typeorm");
Object.defineProperty(exports, "DataSource", { enumerable: true, get: function () { return typeorm_1.DataSource; } });
var _datasource_1 = require("./_datasource");
Object.defineProperty(exports, "AppDataSource", { enumerable: true, get: function () { return _datasource_1.AppDataSource; } });
Object.defineProperty(exports, "_datasource", { enumerable: true, get: function () { return _datasource_1._datasource; } });
