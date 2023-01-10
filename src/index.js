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
import { calculateLemonadePrice, calculateOrderTotal, writeFileSync } from './utils'

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
      total: 0,
      lemonades: [],
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
        default: 1,
        message: 'How many lemonades would you like to order?',
      },
      ({numLemonades}) => {
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
          this.prompt(questions, (userResp) => {
            // Create a lemonade object for each lemonade in the order
            for (let i = 1; i <= numLemonades; i++) {
              order.lemonades.push({
                lemonJuice: userResp['lemonJuice' + i],
                water: userResp['water' + i],
                sugar: userResp['sugar' + i],
                iceCubes: userResp['iceCubes' + i],
              })
            }

            // Set price of each lemonade in the order
            for (let lemonade of order.lemonades) {
              lemonade.price = calculateLemonadePrice(lemonade)
            }

            // Set the total price of the order
            order.total = calculateOrderTotal(order)

            writeFileSync(order.lemonadeStand.name + '/' + order.customer.name + '.json', order)
            callback()
          })
        }
      }
    )
  })
vorpal.show()
