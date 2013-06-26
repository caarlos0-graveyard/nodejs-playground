
// from:
// http://www.codinghorror.com/blog/2007/02/why-cant-programmers-program.html

var fizzbuzz = [0];
for (var i = 1; i <= 100; i++) {
  var st = '';
  if (i % 3 == 0) st += 'Fizz';
  if (i % 5 == 0) st += 'Buzz';
  if (st.length == 0) st = i;
  fizzbuzz.push(st);
}
console.log(fizzbuzz.join(', '));

