import fs from 'fs'
import path from 'path';
import { yarg } from './config/plugins/yargs.plugin';

const {b:base, l:limit, s:show} = yarg;

let outputMessage = '';

const messageHeader = `
=========================
Multiplication Table of ${base}
=========================\n`;


for (let i = 1; i <= limit; i++) {
  const result = base * i;
  outputMessage += `${base} x ${i} = ${result}\n`;
}

outputMessage = messageHeader + outputMessage;

if (show) {
  console.log(outputMessage);
}

const outputDir = path.join(__dirname, '../output');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(`${outputDir}/table-${base}.txt`, outputMessage);

console.log(`La tabla del ${base} fue creada en ${outputDir}/table-${base}.txt`);