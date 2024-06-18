"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachmentsroute = void 0;
const express_1 = require("express");
const entity_1 = require("../entity/");
const _datasource_1 = require("../_datasource");
const bookroutes_1 = require("./bookroutes");
exports.attachmentsroute = (0, express_1.Router)();
exports.attachmentsroute.get("/attachments", (req, res) => {
    /* 	#swagger.tags = ['Grpc.Attachment']
        #swagger.description = 'Endpoint to get attachments'
        
    
    */
    _datasource_1.AppDataSource.manager.find(entity_1.Attachment).
        then(d => {
        res.json(d);
    }).catch(console.log);
});
exports.attachmentsroute.use(bookroutes_1.booksroute);
