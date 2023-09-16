"use strict"
function validateObjectWithGettersSetters(obj, validationRules) {
    const validatedObj = {};
  
    for (const key in validationRules) {
      if (Object.hasOwnProperty.call(validationRules, key)) {
        const rule = validationRules[key];
        const value = obj[key];
  
        Object.defineProperty(validatedObj, key, {
          get: function () {
            return this[`_validated_${key}`];
          },
          set: function (newValue) {
            if (rule(newValue)) {
              this[`_validated_${key}`] = newValue;
            }
          },
        });
  
        // Initialize the property with the initial value to trigger the setter
        validatedObj[key] = value;
      }
    }
  
    return validatedObj;
  }
  
  
  const inputObj = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
  };
  
  const validationRules = {
    name: (value) => typeof value === "string" && value.length > 0,
    age: (value) => typeof value === "number" && value >= 18 && value <= 99,
    email: (value) => typeof value === "string" && value.includes("@"),
  };
  
  const validatedObj = validateObjectWithGettersSetters(inputObj, validationRules);
  
  console.log(validatedObj.name); 
  console.log(validatedObj.age); 
  console.log(validatedObj.email);
  
  validatedObj.name = "Alice"; 
  console.log(validatedObj.name); 
  
  validatedObj.age = 15; 
  console.log(validatedObj.age);
  