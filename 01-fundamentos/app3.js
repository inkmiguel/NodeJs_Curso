const fs = require('fs');

const content = fs.readFileSync('readme.md','utf-8');

// const word = content.split(' ');
// const ReactwordCount = word.filter(word => word.toLowerCase().includes('react')).length;

const ReactwordCount = content.match(/react/gi ?? []).length;

// console.log(wordCount)
// console.log('Palabras:',word.length);
console.log('Palabras:',ReactwordCount);