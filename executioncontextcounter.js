"use strict"


function createCounter() {
    let counter = 0
  
    return function() {
      return counter += 1
    }
  }
  
  const counter = createCounter();
  console.log(counter()); 
  console.log(counter()); 
  const counter1 = createCounter()
  console.log(counter1()); 
  console.log(counter1()); 
  console.log(counter()); 
  console.log(counter1());
  

// Creation Phase

// [[GlobalRef]]: {
//   LexicalEnv: {
//     counter: '<uninitialized>',
//     counter1: '<uninitialized>',
//     createCounter: [[createCounterRef]],
//     outer: null,
//     context: this,
//   }
// }

// [[createCounterRef]]: {
//   LexicalEnv: {
//     counter: '<uninitialized>',
//     outer: GlobalContext
//   }
// }

// [[counterRef]]: {
//   LexicalEnv: {
//     counter: undefined,
//     outer: [[createCounterRef]]
//   }
// }


// Execution Phase

// [[createCounterRef#1]]: {
//    LexicalEnv: {
//      counter: 0,
//      outer: GlobalContext
//    }
// }

// [[counterRef]]: {
//    LexicalEnv: {
//      counter: 0,
//      outer: [[ctreateCounterRef#1]] 
//    }
// }

// [[GlobalRef]]: {
//    LexicalEnv: {
//      createCounter: <initalized funcion>,
//      counter: <initalized function>,
//      counter1: <initalized function>,
//      outer: null,
//      context: this,
//    }
// }


// [[counterRef]]: {
//    LecicalEnv: {
//      counter: 0,
//      outer: [[createCounterRef#1]]
//    }
// }


// [[counter1Ref]]: {
//    LexicalEnv: {
//      counter: 0,
//      outer: [[createCounterRef#2]]
//    }
// }
