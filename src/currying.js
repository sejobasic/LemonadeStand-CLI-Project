// const add = (a, b) => a + b

// const curriedAdd = a => b => a + b

function add(a, b, c) {
  return a + b + c
}

function curriedAdd(a) {
  return function (b) {
    return a + b
  }
}

const increment = curriedAdd(1)

const add5 = curriedAdd(5)

console.log(curriedAdd(1)(2))

console.log(increment(10))

console.log(add5(10))

function curry(f, arr = []) {
  return function (...args) {
    // takes some value a
    return function (a) {
      // returns if a.length is equal to f.length
      // calls the function and spreads all the values
      // otherwise just recursively calls itself passing the func and values it already has
      return a.length === f.length ? f(...a) : curry(f, a)
    }
  }
}

// rest parameters
// ...a gathers any arguments you pass in and puts them in an array
function f(...a) {
  console.log(a)
}

// Here our first parameter - argument 10 is ignored and the rest are gathered
function f2(num, ...a) {
  console.log(a)
}

f(10, 20, 30, 40, 'Hello', true, [1, 2, 3], { a: 'hey', b: 'Hi' })
f2(10, 20, 30, 40, 'Hello', true, [1, 2, 3], { a: 'hey', b: 'Hi' })

// Spread arguments into a function
// Take all individual values from arr and pass them into function on at a time
const a = [1, 2, 3, 4, 5, 6]
f(...a)
