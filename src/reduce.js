const arrToObj = (acc, curr, idx) => {
  const letters = ['a', 'b', 'c', 'd']
  return {
    ...acc,
    [letters[idx]]: curr
  }
}

console.log([1, 2, 3, 4].reduce(arrToObj, {}))