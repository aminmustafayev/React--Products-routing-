const user_controller = require("./users_controllers")
const product_controller = require("./product_controllers")
const orders_controller = require("./orders_controllers")
const messages_controller = require("./messages_controllers")
const category_controller = require("./category_controllers")

const controller = {
    user: user_controller,
    product: product_controller,
    orders: orders_controller,
    message: messages_controller,
    category: category_controller
}
module.exports = controller