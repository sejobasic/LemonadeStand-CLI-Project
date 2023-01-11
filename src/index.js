import Vorpal from 'vorpal'
import {
  calculateLemonadePrice,
  calculateOrderTotal,
  addQuestions,
  addLemonadesToOrder,
  writeFileSync,
  readAllFiles,
} from './utils'

const vorpal = Vorpal()

vorpal
  .command(
    'Order <name> <phoneNumber>',
    'Create an order and saves it as a JSON file'
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
      ({ numLemonades }) => {
        this.prompt(addQuestions(numLemonades), (userResp) => {
          // Create a lemonade object for each lemonade in the order
          for (let i = 1; i <= numLemonades; i++) {
            order = addLemonadesToOrder(order, i)
          }

          writeFileSync(
            order.lemonadeStand.name + '/' + order.customer.name + '.json',
            order
          )
          callback()
        })
      }
    )
  })

// Get all orders from a lemonade stand
vorpal
  .command(
    'Get Orders <lemonadeStand>',
    'Get all orders for the given lemonade stand'
  )
  .action(function ({ lemonadeStand }, callback) {
    this.log(readAllFiles(lemonadeStand))
    callback()
  })

vorpal.show()
