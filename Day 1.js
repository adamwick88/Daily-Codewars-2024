/*8 kyu
Fundamentals: Return
893790% of 2,2438,099 of 15,760JasonFTW
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

FUNDAMENTALS*/

function add(num1, num2) {
    return num1 + num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function mod(num1, num2) {
    return num1 % num2;
}

function exponent(base, exponent) {
    return Math.pow(base, exponent);
}

function subt(num1, num2) {
    return num1 - num2;
}

