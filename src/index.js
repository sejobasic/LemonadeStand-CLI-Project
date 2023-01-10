// const order = {
//   total: 5.0,
//   lemonades: [
//     {
//       lemonJuice: 4,
//       water: 2,
//       sugar: 3,
//       iceCubes: 7,
//       price: 5,
//     },
//     {
//       lemonJuice: 4,
//       water: 3,
//       sugar: 2,
//       iceCubes: 3,
//       price: 5,
//     },
//     {
//       lemonJuice: 2,
//       water: 2,
//       sugar: 3,
//       iceCubes: 2,
//       price: 5,
//     },
//     {
//       lemonJuice: 2,
//       water: 2,
//       sugar: 1,
//       iceCubes: 4,
//       price: 5,
//     },
//   ],
//   lemonadeStand: [
//     {
//       name: 'Sejos Lemonade Stand',
//     },
//   ],
//   customer: {
//     name: 'Jack',
//     phoneNumber: '222-222-2222',
//   },
// }

import Vorpal from 'vorpal'
import { calculateLemonadePrice, calculateOrderTotal } from './utils'

const vorpal = Vorpal()

vorpal
  .command('hello <name>', 'Prints hello')
  .action(function (args, callback) {
    this.log(`Hello ${args.name}`)
    callback()
  })

vorpal
  .command(
    'Order <name> <phoneNumber>',
    'Create an order and saves it as a JSOn file'
  )
  .action(function (args, callback) {
    const order = {
      customer: {
        name: args.name,
        phoneNumber: args.phoneNumber,
      },
      lemonadeStand: {
        name: 'Sejos Lemonade Stand',
      },
    }

    // Prompt the user for how many lemonades they want
    this.prompt(
      {
        type: 'number',
        name: 'numLemonades',
        message: 'How many lemonades would you like to order?',
      },
      (userResp) => {
        const userNum = Number.parseInt(userResp.numLemonades)
        let lemonade = {}

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
          this.prompt(questions, (userResp) => {
            this.log(userResp)
            callback()
          })
        }
      }
    )
  })
vorpal.show()
