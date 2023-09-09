"use strict";


function Person(name, age) {
    this.name = name;
    this.age = age;
}


Person.prototype.sayHello = function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
};


function Baby(name, age, favoriteToy) {
    Person.call(this, name, age);
    this.favoriteToy = favoriteToy;
}


Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
};

const baby = new Baby("Alice", 1, "Teddy bear");


console.log(baby.name);
console.log(baby.age);
console.log(baby.favoriteToy);
console.log(baby.sayHello()); 
console.log(baby.play()); 
