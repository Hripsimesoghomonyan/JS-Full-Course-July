"use strict";

function Calculator() {
}

Calculator.prototype.add = function(first, second) {
    return first + second;
};
  
Calculator.prototype.subtract = function(first, second) {
    return first - second;
};
  
Calculator.prototype.multiply = function(first, second) {
    return first * second;
};
  
Calculator.prototype.divide = function(first, second) {
    if (second === 0) {
        return "Division by zero is not allowed";
    }
    return first / second;
}

const calculator = new Calculator();

console.log(calculator.add(10, 5));   
console.log(calculator.subtract(10, 5)); 
console.log(calculator.multiply(10, 5)); 
console.log(calculator.divide(10, 5));  
