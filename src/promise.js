const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000)
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(), 2000)
})

// promise.then(() => console.log('Waited for 1 second'))
// promise2.then(() => console.log('Waited for 2 seconds'))

promise
  .then(() => console.log('Waited for 1 second'))
  .then(() => promise2)
  .then(() => console.log('Waited for 2 seconds'))

// Promise.race
// Waits for either one promise to complete or one promise to reject whichever happens first
Promise.race([promise, promise2]).then(() => console.log('promise2 won'))

// Promise.all
// Waits for all of the promises to resolve
// Then gathers the result of all the promises and passes in as array
Promise.all([promise, promise2]).then(() => console.log('promise2 won'))