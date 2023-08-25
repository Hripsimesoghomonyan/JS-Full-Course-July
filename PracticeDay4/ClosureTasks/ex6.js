"use strict"

function memoize(fn) {
    const cache = {};
    
    return function (...args) {
      const key = JSON.stringify(args);
      
      if (cache[key] === undefined) {
        cache[key] = fn(...args);
      }
      
      return cache[key];
    };
  }
  
  function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const memoizedFibonacci = memoize(fibonacci);
  
  console.log(memoizedFibonacci(10)); 
  console.log(memoizedFibonacci(10)); 
  