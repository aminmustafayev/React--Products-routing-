const mongoose = require("mongoose");
const OrdersSchema = require('../schemas/order.schema')

const OrdersModel = mongoose.model("Orders", OrdersSchema);

module.exports = OrdersModel