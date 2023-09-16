"use strict";

function extend(target, properties) {
  for (const key in properties) {
    if (Object.hasOwnProperty.call(properties, key)) {
      const descriptor = properties[key];

      if ('get' in descriptor || 'set' in descriptor) {
        Object.defineProperty(target, key, {
          get: descriptor.get,
          set: descriptor.set,
          enumerable: true,
          configurable: true,
        });
      } else {
        Object.defineProperty(target, key, {
          value: descriptor.value,
          writable: descriptor.writable !== undefined ? descriptor.writable : true,
          enumerable: true,
          configurable: true,
        });
      }
    }
  }
}

const myObj = { prop1: "value1" };

extend(myObj, {
  prop2: {
    get() {
      return "value2";
    },
    set(newValue) {
      console.log(`Setting prop2 to ${newValue}`);
    },
  },
  prop3: {
    value: "value3",
    writable: true, 
  },
});

console.log(myObj.prop1); 
console.log(myObj.prop2); 
myObj.prop2 = "new value"; 
console.log(myObj.prop3); 
myObj.prop3 = "new value";
console.log(myObj.prop3);