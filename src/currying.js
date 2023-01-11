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

const a = 3

const increment = curriedAdd(1)

const add5 = curriedAdd(5)

console.log(curriedAdd(1)(2))

console.log(increment(10))

console.log(add5(10))
