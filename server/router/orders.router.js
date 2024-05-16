const express = require("express");
const order_router = express.Router()
const controller = require("../controllers/index")
const orders_middleware = require("../middlewares/orders.middlewares")

order_router.get("/api/orders", controller.orders.getAll)
order_router.getOne("/api/orders/:id",controller.orders.getOne)
order_router.delete("/api/orders/:id",controller.orders.delete)
order_router.patch("/api/orders/:id",controller.orders.update)
order_router.post("/api/orders", orders_middleware,controller.orders.post)

module.exports = order_router