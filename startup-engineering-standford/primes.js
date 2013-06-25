#!/usr/bin/env node
var fs = require('fs');

var outfile = 'primes.txt'
   , out = ''
   , primes = [];

var isPrime = function(number) {
  if ( number < 2 ) {
    return false;
  }
  var q = Math.sqrt(number);
  for (var i = 2; i <= q; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

var i = 2;
while (primes.length < 100) {
  if (isPrime(i)) {
    primes.push(i);
  }
  i++;
}

out = primes.join(',') + '\n';

fs.writeFileSync(outfile, out);

console.log('Script: ' + __filename + '\nWrote: ' + out + 'To: ' + outfile);

