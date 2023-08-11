"use strict"
  
  Array.prototype.flatCustom = function (depth = 1) {
    return this.reduce((acc, val) => {
      return acc.concat(Array.isArray(val) && depth > 1 ? val.flatCustom(depth - 1) : val);
    }, []);
  };