"use strict"

function createPerson(initialName, initialAge) {
    let name = initialName;
    let age = initialAge;
  
    function getName() {
      return name;
    }
  
    function getAge() {
      return age;
    }
  
    function setName(newName) {
      name = newName;
    }
  
    function setAge(newAge) {
      age = newAge;
    }
  
    return {
      getName,
      getAge,
      setName,
      setAge,
    };
  }
  
  const person = createPerson("Alice", 30);
  
  console.log(person.getName()); // Output: Alice
  console.log(person.getAge());  // Output: 30
  
  person.setName("Bob");
  person.setAge(25);
  
  console.log(person.getName()); // Output: Bob
  console.log(person.getAge());  // Output: 25
  