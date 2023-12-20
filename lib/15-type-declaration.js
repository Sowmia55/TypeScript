"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('Logged in user', process.env.USER);
// declare const process: any; (syntax)
//file system
const fs_1 = __importDefault(require("fs"));
fs_1.default.writeFileSync('hello', 'hello');
