// "use strict";

// function createCachingFunction() {
//   const cache = {};

//   return function(input) {
//     if (input in cache) {
//       return `${cache[input]} (cached)`;
//     } 
//       const result = input * 2; 
//       cache[input] = result;
//       return result;
    
//   };
// }

// const cachedCalculation = createCachingFunction();

// console.log(cachedCalculation(5));
// console.log(cachedCalculation(5));
// console.log(cachedCalculation(10));
// console.log(cachedCalculation(5));
class BankAccount {
  static changeAccountType(accountType) {
    this.newAccountType = accountType;
    return this.newAccountType;
  }
  constructor({newAccountType = "Normal"} = {}) {
    this.newAccountType = newAccountType;
  }
}
const cutomer = new BankAccount({newAccountType: "Gold"});
console.log(cus);