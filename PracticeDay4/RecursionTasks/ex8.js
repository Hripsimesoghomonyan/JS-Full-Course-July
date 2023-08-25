"use strict"

function flattenObject(obj, prefix = "") {
  let flattened = {};

  for (const key in obj) {
    if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      const nestedFlattened = flattenObject(obj[key], prefix + key + ".");
      flattened = { ...flattened, ...nestedFlattened };
    } else {
      flattened[prefix + key] = obj[key];
    }
  }

  return flattened;
}

const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: 4,
    },
  },
  g: 5,
};

const flattenedObject = flattenObject(nestedObject);
console.log(flattenedObject);
