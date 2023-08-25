"use strict"

function createCalculator(operation) {
  if (operation === "add") {
    return function (a, b) {
      return a + b;
    };
  } else if (operation === "multiply") {
    return function (a, b) {
      return a * b;
    };
  } else {
    throw new Error("Invalid operation");
  }
}

const add = createCalculator("add");
console.log(add(3, 5)); 

const multiply = createCalculator("multiply");
console.log(multiply(2, 4)); 