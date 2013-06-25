#!/usr/bin/env node
var fs = require('fs');

var outfile = 'primes.txt'
   , out = ''
   , primes = [];

var isPrime = function(n) {
  if ( n < 2 ) {
    return false;
  }
  // If a number n is not a prime, it can be factored into two
  // factors a and b: n = a*b
  // If both a and b were greater than the square root of n,
  // a*b would be greater than n. So at least one of those
  // factors must be less or equal to the square root of n,
  // and to check if n is prime, we only need to test for
  // factors less than or equal to the square root.
  var q = Math.sqrt(n);
  for (var i = 2; i <= q; i++) {
    if (n % i == 0) {
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

