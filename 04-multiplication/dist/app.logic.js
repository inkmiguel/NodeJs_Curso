"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let outputMessage = '';
const base = 5;
const messageHeader = `
=========================
Multiplication Table of ${base}
=========================\n`;
for (let i = 1; i <= 10; i++) {
    const result = base * i;
    outputMessage += `${base} x ${i} = ${result}\n`;
}
outputMessage = messageHeader + outputMessage;
console.log(outputMessage);
const outputDir = path_1.default.join(__dirname, '../output');
if (!fs_1.default.existsSync(outputDir)) {
    fs_1.default.mkdirSync(outputDir, { recursive: true });
}
fs_1.default.writeFileSync(`${outputDir}/table-${base}.txt`, outputMessage);
