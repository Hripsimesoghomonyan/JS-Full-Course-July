"use strict"

Function.prototype.myApply = function (context, argsArray) {
    context = context || window;
    const uniqueID = Date.now().toString();
    context[uniqueID] = this;
    const result = context[uniqueID](...argsArray);
    delete context[uniqueID]; 
    return result; 
  };
  
  
  function greet(name1, name2) {
    console.log(`Hello, ${name1} and ${name2}! I'm ${this.message}`);
  }
  
  const context = {
    message: "a custom context",
  };
  
  greet.myApply(context, ["John", "Alice"]); 
  