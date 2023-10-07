"use strict"

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.topNode = null;
    this.size = 0;
  }

  push(element) {
    const newNode = new Node(element);
    newNode.next = this.topNode;
    this.topNode = newNode;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedElement = this.topNode.data;
    this.topNode = this.topNode.next;
    this.size--;
    return poppedElement;
  }

  peek() {
    return this.topNode ? this.topNode.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());
