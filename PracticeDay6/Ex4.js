"use strict";

function Car(model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
}
  
Car.prototype.fill = function(gallons) {
    this.tank += gallons;
};
  
Car.prototype.drive = function(distance) {
    const maxDistance = this.tank * this.milesPerGallon;
    if (distance >= maxDistance) {
        this.odometer += distance;
        this.tank -= distance / this.milesPerGallon;
        return `Drove ${distance} miles.`; // Return a success message
    } else {
        this.odometer += maxDistance;
        this.tank = 0;
        return `I ran out of fuel at ${dist} miles!`;
    }
};
  
const car = new Car("Toyota", 25);
  
console.log(car.model);
console.log(car.milesPerGallon); 
  
car.fill(10);
console.log(car.tank); 
  
console.log(car.drive(200));
console.log(car.odometer);
console.log(car.tank);
