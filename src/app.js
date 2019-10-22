"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const fun = function (x, y) {
    return x + y;
};
app.get('/', (req, res) => {
    res.send('Hello');
});
app.listen(5000, () => {
    console.log('running' + fun(2, 3));
});
