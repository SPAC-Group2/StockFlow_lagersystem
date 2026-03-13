"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExample = getExample;
const exampleService_js_1 = require("../services/exampleService.js");
function getExample(req, res) {
    const data = (0, exampleService_js_1.getExampleData)();
    res.json(data);
}
