"use strict"
class Stack {
  constructor() {
    this.storage = [];
  }

  push(element) {
    this.storage.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.storage.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  getSize() {
    return this.storage.length;
  }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.top()); 
console.log(stack.isEmpty()); 
console.log(stack.getSize()); 
