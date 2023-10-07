"use strict"

function foo(a) {
  return function foo2() {
    return a + 5
  }
}

// Creation phase
/*
[[globalContextRef]] : {
  LexicalEnv: {
    context: this,
    EnvRecord: {
      foo: [[fooFunctionRef]]
    },
    outer: null
  }
}

[[fooFunctionRef]]: {
  LexicalEnv: {
    context: this,
    EnvRecord: {
      arguments: { a: <uninitialized> },
      foo2: [[foo2FunctionRef]]
    },
    outer: [[globalContextRef]]
  }
}

[[foo2FunctionRef]]: {
  LexicalEnv: {
    context: this,
    EnvRecord: {},
    outer: [[fooFunctionRef]]
  }
}

*/

const res = foo(4)

const res2 = foo(3)

console.log(res()) // 9
console.log(res2()) // 8


// Execution Phase
/*
[[fooFunctionRef#1]]: {
  LexicalEnv: {
    context: this,
    EnvRecord: {
      arguments: { a: 4 },
      foo2: [[foo2FunctionRef]]
    },
    outer: [[globalContextRef]]
  }
}

[[fooFunctionRef#2]]: {
  LexicalEnv: {
    context: this,
    EnvRecord: {
      arguments: { a: 3 },
      foo2: [[foo2FunctionRef#1]]
    },
    outer: [[globalContextRef]]
  }
}

[[foo2FunctionRef#1]]: {
  LexicalEnv: {
    context: this,
    EnvRecord: {},
    outer: [[fooFunctionRef#1]]
  }
}

[[foo2FunctionRef#2]]: {
  LexicalEnv: {
    context: this,
    EnvRecord: {},
    outer: [[fooFunctionRef#2]]
  }
}

*/

// Clouder and recurcia write executioin context  ex  task for extrapractice
