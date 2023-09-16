"use strict"

function deepCloneWithDescriptors(obj) {
    if (obj === null || typeof obj !== 'object') {
      return obj; 
    }
  
    if (obj instanceof Date) {
      return new Date(obj);
    }
  
    if (Array.isArray(obj)) {
      return obj.map((item) => deepCloneWithDescriptors(item));
    }
  
    if (obj instanceof RegExp) {
      return new RegExp(obj); 
    }
  
    const clone = Object.create(Object.getPrototypeOf(obj));
  
    for (const key of Object.getOwnPropertyNames(obj)) {
      const descriptor = Object.getOwnPropertyDescriptor(obj, key);
  
      if ('value' in descriptor) {
        descriptor.value = deepCloneWithDescriptors(descriptor.value);
      }
  
      Object.defineProperty(clone, key, descriptor);
    }
  
    return clone;
  }
  
  
  
  const originalObject = {
    name: "John Doe",
    age: 30,
    get fullName() {
      return `${this.name}, Age: ${this.age}`;
    },
    set fullName(value) {
      const parts = value.split(', ');
      this.name = parts[0];
      this.age = parseInt(parts[1]);
    },
  };
  
  const clonedObject = deepCloneWithDescriptors(originalObject);
  
  console.log(clonedObject.fullName); 
  
  clonedObject.fullName = "Alice, 25";
  
  console.log(clonedObject.fullName);
  console.log(clonedObject.name); 
  console.log(clonedObject.age); 
  