"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.booksroute = void 0;
const express_1 = require("express");
const Book_1 = require("../entity/Book");
const helpers_1 = require("../helpers");
//import { User } from "../entity/User";
const _datasource_1 = require("../_datasource");
exports.booksroute = (0, express_1.Router)();
exports.booksroute.get("/attachments/books", (req, res) => {
    /* 	#swagger.tags = ['Attachment.Book']
        #swagger.description = 'Endpoint to get books'
    */
    _datasource_1.AppDataSource.manager.find(Book_1.Book).
        then(d => {
        res.json(d);
    }).catch(console.log);
});
exports.booksroute.post("/attachments/books", (req, res) => {
    /* 	#swagger.tags = ['Attachment.Book']
        #swagger.description = 'Endpoint to get tickets'
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'book.',
            schema: { $ref: '#/definitions/AddBook' }
    }
    */
    let book = Object.assign({}, req.body.book);
    let userid = req.body.userid;
    if ((0, helpers_1.isNumeric)(userid)) {
        userid = (0, helpers_1.nationalIdvalid)(userid) == true ? userid : 0;
        console.log(book, userid);
        res.jsonp(book);
    }
    else {
        res.json({ message: "check your info" });
    }
});
