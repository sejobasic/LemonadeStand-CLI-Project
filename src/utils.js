import fs from 'fs'

function calculateLemonadePrice(lemonade) {
  let result = 0.75
  for (let key in lemonade) {
    switch (key) {
      case 'lemonJuice':
        result += lemonade[key] * 0.3
        break
      case 'water':
        result += lemonade[key] * 0.01
        break
      case 'sugar':
        result += lemonade[key] * 0.2
        break
      case 'iceCubes':
        result += lemonade[key] * 0.05
        break
      default:
        break
    }
  }
  return result
}

function calculateOrderTotal({ lemonades }) {
  let result = 0
  for (let lemonade of lemonades) {
    result += lemonade.price
  }
  return result
}

function addQuestions(numLemonades) {
  const userNum = Number.parseInt(numLemonades)
  const questions = []

  for (let i = 1; i <= userNum; i++) {
    questions.push({
      type: 'number',
      name: 'lemonJuice' + i,
      message: `How many cups of lemon juice do you want in your lemonade ${i}?"`,
    })
    questions.push({
      type: 'number',
      name: 'water' + i,
      message: `How many cups of water do you want in your lemonade ${i}?"`,
    })
    questions.push({
      type: 'number',
      name: 'sugar' + i,
      message: `How many cups of sugar do you want in your lemonade ${i}?"`,
    })
    questions.push({
      type: 'number',
      name: 'iceCubes' + i,
      message: `How many ice cubes do you want in your lemonade ${i}?"`,
    })
  }
  return questions
}

function createLemonadeObjs(orgOrder, i) {({
    ...orgOrder,
    lemonades: [
      ...orgOrder.lemonades,
      {
        lemonJuice: Number.parseInt(userResp['lemonJuice' + i]),
        water: Number.parseInt(userResp['water' + i]),
        sugar: Number.parseInt(userResp['sugar' + i]),
        iceCubes: Number.parseInt(userResp['iceCubes' + i]),
      },
    ]})
}

function writeFileSync(fileName, order) {
  fs.writeFileSync(fileName, JSON.stringify(order))
}

function readAllFiles(dirName) {
  const orders = []

  for (let name of fs.readdirSync(dirName)) {
    orders.push(JSON.parse(fs.readFileSync(dirName + '/' + name)))
  }
  return orders
}

export {
  calculateLemonadePrice,
  calculateOrderTotal,
  addQuestions,
  createLemonadeObjs,
  writeFileSync,
  readAllFiles,
}
