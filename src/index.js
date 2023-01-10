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

vorpal.show()
