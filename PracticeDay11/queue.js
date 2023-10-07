"use strict"

class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements.shift();
  }

  front() {
    return this.isEmpty() ? null : this.elements[0];
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  print() {
    console.log(this.elements.join(' '));
  }
}


const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print();
console.log("Front element: " + queue.front());
queue.dequeue();
queue.print();
console.log("Queue size: " + queue.size());
