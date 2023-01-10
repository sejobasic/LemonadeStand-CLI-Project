const lemonade = {
  lemonJuice: 3,
  water: 2,
  sugar: 1.5,
  iceCubes: 3,
  getLemonJuice() {
    return this.lemonJuice
  },
  calculatePrice() {
    return (
      this.lemonJuice * 0.3 +
      this.water * 0.01 +
      this.sugar * 0.25 +
      this.iceCubes * 0.05 + 0.75
    )
  }
}

function updateLemonade(lemonade, lemonJuice, water, sugar, iceCubes) {
  return {
    ...lemonade,
    lemonJuice,
    water,
    sugar,
    iceCubes
  }
}
console.log(updateLemonade(lemonade, 1, 2, 3, 4))

const nums = [1, 2, 3, 4, 5]
const numbersCopy = [...nums]
numbersCopy[5] = 3
console.log(numbersCopy)


let {water, lemonJuice, sugar, iceCubes} = lemonade

console.log(water, lemonJuice, sugar, iceCubes)
