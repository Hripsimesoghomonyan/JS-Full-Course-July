"use strict"

const memoizationMap = new Map();

function fibonacciMemoization(n) {
  if (memoizationMap.has(n)) {
    return memoizationMap.get(n);
  }

  
  if (n <= 1) {
    return n;
  }

  
  const result = fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2);

  
  memoizationMap.set(n, result);

  return result;
}


console.log(fibonacciMemoization(5));
console.log(fibonacciMemoization(10)); 
