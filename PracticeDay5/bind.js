"use strict"

Function.prototype.myBind = function (context, ...boundArgs) {
  const originalFunction = this; 
  return function (...callArgs) {
    return originalFunction.apply(context, boundArgs.concat(callArgs));
  };
};


function greet(name) {
  console.log(`Hello, ${name}! I'm ${this.message}`);
}

const context = {
  message: "a custom context",
};

const boundFunction = greet.myBind(context, "John");
boundFunction(); 
