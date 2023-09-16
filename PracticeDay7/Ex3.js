"use strict"

class ImmutableClass {
  constructor(data) {
    const privateData = { ...data };

    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        get: function () {
          return privateData[key];
        },
        set: function () {
          throw new Error(`Cannot modify property '${key}' of an immutable object.`);
        },
        enumerable: true,
      });
    });

    Object.freeze(this); 
  }
}

const initialData = {
  name: "John Doe",
  age: 30,
};

const immutableObject = new ImmutableClass(initialData);

console.log(immutableObject.name); 

try {
  immutableObject.name = "Alice";
} catch (error) {
  console.error(error.message); 
}
