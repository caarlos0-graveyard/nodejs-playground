#!/usr/bin/env node
var fs = require('fs');

var outfile = 'hello.txt';

// var out = 'Ok, I am editing it\n';
var out = 'A startup is a business built to grow rapidly.\n'
fs.writeFileSync(outfile, out);

console.log('Script: ' + __filename + '\nWrote: ' + out + 'To: ' + outfile);

