"use strict"

class Animal {
  constructor(species) {
    this.species = species;
    this.energy = 0;
  }

  makeSound() {
    this.energy -= 3;
  }

  eatFood() {
    this.energy += 5;
  }

  sleep() {
    this.energy += 10;
  }
}

class Food {
  constructor(type) {
    this.type = type;
  }
}

class Tiger extends Animal {
  constructor() {
    super("Tiger");
  }

  sleep() {
    super.sleep();
    this.energy += 5; 
  }

  eatFood(food) {
    if (food instanceof Grain) {
      return "I can't eat that";
    }
    super.eatFood();
  }
}

class Monkey extends Animal {
  constructor() {
    super("Monkey");
  }

  makeSound() {
    super.makeSound();
    this.energy -= 4;
  }

  eatFood() {
    super.eatFood();
    this.energy += 2;
  }

  play() {
    if (this.energy >= 8) {
      this.energy -= 8;
      return "Oooo Oooo";
    } else {
      return "I’m too tired";
    }
  }
}

class Snake extends Animal {
  constructor() {
    super("Snake");
  }
}

class Fish extends Food {
  constructor() {
    super("Fish");
  }
}

class Grain extends Food {
  constructor() {
    super("Grain");
  }
}

class Meat extends Food {
  constructor() {
    super("Meat");
  }
}

class Jungle {
  constructor() {
    this.animals = {
      tigers: [],
      monkeys: [],
      snakes: [],
    };
  }

  addAnimal(animal) {
    if (animal instanceof Tiger) {
      this.animals.tigers.push(animal);
    } else if (animal instanceof Monkey) {
      this.animals.monkeys.push(animal);
    } else if (animal instanceof Snake) {
      this.animals.snakes.push(animal);
    }
  }

  soundOff() {
    const sounds = [];
    for (const species in this.animals) {
      this.animals[species].forEach((animal) => {
        animal.makeSound();
        sounds.push(`${animal.species} says sound and has energy ${animal.energy}`);
      });
    }
    return sounds;
  }
}


const tiger1 = new Tiger();
const tiger2 = new Tiger();
const monkey1 = new Monkey();
const monkey2 = new Monkey();
const snake1 = new Snake();

const jungle = new Jungle();
jungle.addAnimal(tiger1);
jungle.addAnimal(tiger2);
jungle.addAnimal(monkey1);
jungle.addAnimal(monkey2);
jungle.addAnimal(snake1);

console.log(jungle.soundOff());
tiger1.sleep();
monkey1.eatFood();
console.log(jungle.soundOff());
console.log(monkey1.play());
