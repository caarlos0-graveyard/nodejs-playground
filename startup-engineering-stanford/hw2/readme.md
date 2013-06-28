# QUIZ


### Question 1

Which of the following statements is true about our use of npm and chmod before
executing ./market-research.js?

- [ ] Installing the libraries via npm is essential to invoking the script at
the command line, but changing executability via chmod (or a similar command)
is not.
- [ ] Neither is essential, but doing this a useful practice.
- [ ] Using chmod to change executability is essential to invoking the script
at the command line, but using npm to install the libraries is not.
- [x] We need to both install necessary libraries and make the file executable
before executing it.

### Question 2

After looking at the source of market-research.js, what variable holds the
arguments sent to the script when invoked at the command line?

- [ ] require.main
- [x] process.argv
- [ ] columns
- [ ] console.log

### Question 3

What do the lines like `symbols = symbols || SYMBOLS_DEFAULT;` do?

- [ ] This is a JS idiom for checking that arguments are within a valid range.
- [x] This is a JS idiom for setting default arguments.
- [ ] This is a JS idiom for overriding user inputted arguments.
- [ ] This is a JS idiom for setting symbols to undefined.

### Question 4

Which of the following are standard node modules, included with the default
install?

- [ ] restler
- [x] util
- [ ] csv
- [ ] accounting
- [x] fs

### Question 5

What is the most likely bug in the `marketCapFloat` function?

- [ ] No bug in this function.
- [x] The function currently assumes dollar values in the billions.
- [ ] It incorrectly assumes that the return value of the function should be
a floating point.
- [ ] `parseFloat` should not be used here.

### Question 6

What does `csv2console` do?
- [ ] Reads in data from csvfile and prints it out unchanged to STDOUT.
- [x] Reads in data from csvfile, computes and formats derived quantities,
and prints these out to STDOUT.
- [ ] Reads in data from the Yahoo Finance API directly.
- [ ] Reads in data from csvfile, asserts that it is within range, and prints
to STDOUT.

### Question 7

What does `buildfn` do? (Hint: read this and this if you've never heard of
closures.)

- [ ] Prints out an error message if the HTTP response returns an error.
- [ ] Creates and returns a function named response2console, which is
parametrized with the values of result and response from the enclosing scope.
- [ ] Writes data from the Yahoo Finance API to csvfile.
- [x] Creates and returns a function named response2console, which is
parametrized with the values of csvfile and headers from the enclosing scope.

### Question 8

What does the `marketResearch` function do?

- [ ] Constructs a Yahoo Finance API call and exits
- [ ] Sets several default values and then exits.
- [x] Constructs a Yahoo Finance API call, and invokes code that first writes
the results of that API call to disk and then reads/prints/processes said file
- [ ] Resolves errors when invoked at the command line

### Question 9

What does the `if(require.main == module)` conditional do? Check all that apply.
(Hint: see here and here (halfway down the page) if you can't figure it out from context).

- [x] Parse the stock symbols input at the command line, starting with the
process.argv variable and producing the symbols variable.
- [ ] Confirm that the code is only being invoked as a library and shut down
with an error otherwise.
- [ ] Confirm that the code is only being invoked as a command line app and
shut down with an error otherwise.
- [x] Triggers two different blocks of code, one that executes when
market-research is invoked from the command line and one that executes when
invoked as a module via require.

### Question 10

Why do we use console.error in addition to console.log (Hint: see here)?

- [ ] console.error is the same as console.log, we just do it for the sake
of variety.
- [x] console.error prints to STDERR, while console.log prints to STDOUT.
This allows us to print both metadata/error messages and actual output at the
same time.
- [ ] console.error will force the program to exit.
- [ ] console.error is more robust.


