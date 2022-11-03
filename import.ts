declare function require(name: string): any;
var fs = require('fs');
var data = fs.readFileSync('abc.txt');
console.log(data.toString())