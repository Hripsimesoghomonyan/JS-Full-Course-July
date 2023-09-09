"use strict"

Function.prototype.myCall = function (context, ...args) {
    context = context || window; 
    const uniqueID = Date.now().toString(); 
    context[uniqueID] = this; 
    const result = context[uniqueID](...args); 
    delete context[uniqueID];
    return result; 
  };
  
  
  function greet(name) {
    console.log(`Hello, ${name}! I'm ${this.message}`);
  }
  
  const context = {
    message: "a custom context",
  };
  
  greet.myCall(context, "John"); 