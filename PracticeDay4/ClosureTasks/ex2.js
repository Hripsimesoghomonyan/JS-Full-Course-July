"use strict"
function privateVariable(initialValue) {
  const obj = {
    value: initialValue,
    get() {
      return obj.value;
    },
    set(newValue) {
      obj.value = newValue;
    }
  };

  return obj;
}

const secretValue = privateVariable(42);

console.log(secretValue.get()); 

secretValue.set(100);

console.log(secretValue.get()); 
