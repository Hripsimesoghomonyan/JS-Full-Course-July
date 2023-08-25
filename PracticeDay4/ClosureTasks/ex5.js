"use strict"

function partial(callback, ...partialArgs) {
    return function (...args) {
      return callback(...partialArgs, ...args);
    };
  }
  
  function add(a, b, c) {
    return a + b + c;
  }
  
  const add5 = partial(add, 5);
  
  console.log(add5(10, 20)); 
  