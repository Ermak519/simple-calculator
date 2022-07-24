## How to test calculator:

- in terminal run command "npm install" (node.js and npm must be installed on your computer) to install all dependencies;
- write your code in "calc.js" file;
- to check yourself in terminal run command "npm run test"

## Work description

The function accepts arithmetic operations of two numbers as a string and returns a string with the result of their execution.

- The calculator can perform operations of addition, subtraction, multiplication and division with two numbers:
  - a + b, a - b, a \* b, a / b. The data is transferred as a string.
- The calculator can work with Arabic (1,2,3,4,5 ...) and Roman (I, II, III, IV, V ...) numbers.
- The calculator accepts numbers from 1 to 10.
- The calculator only works with integers.
- The output is always a string with an integer.
- The calculator works only with Arabic or Roman numerals at the same time, when you enter a string like "3 + II", the calculator throws an error.
- Zero and negative numbers are missing in Roman system - the program returns an empty string.
- The application throws an error when entering inappropriate numbers.
- If you enter a string that does not match one of the above arithmetic operations, the application throws an error.
