const express = require("express");
const controller = require("../controllers/index");
const product_router = express.Router()
const product_middlewares = require("../middlewares/product.midddlewares")
 
product_router.get("/api//products",controller.product.getALL)
product_router.getOne("/api/products/:id",controller.product.getOne)
product_router.delete("/api/products/:id",controller.product.delete)
product_router.patch("/api/products/:id", controller.product.update)
product_router.post("/api/products", product_middlewares,controller.product.post)

module.exports = product_router