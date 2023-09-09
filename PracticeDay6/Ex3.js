"use strict"


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  
  
  Person.prototype.eat = function(food) {
    if (this.stomach.length < 10) {
      this.stomach.push(food);
    }
  };
  
  
  Person.prototype.poop = function() {
    this.stomach = [];
  };
  
  
  Person.prototype.toString = function() {
    return `${this.name}, ${this.age}`;
  };
  
  
  const person1 = new Person("Mary", 50);
  const person2 = new Person("John", 35);
  
  
  person1.eat("apple");
  person1.eat("banana");
  console.log(person1.stomach); 
  
  person1.poop();
  console.log(person1.stomach); 
  
  console.log(person1.toString()); 
  console.log(person2.toString());