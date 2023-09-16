const obj = {};

Object.defineProperty(obj, 'name', {
  get: function () {
    return this._name;
  },
  set: function (newValue) {
    this._name = newValue;
  },
});

obj.name = "Hamlet, Artavazd";
console.log(obj.name);