const express = require("express");
const category_router = express.Router()
const controller = require("../controllers/index")
const category_middlewares = require("../middlewares/category.middlewares")

category_router.get("/api/category",controller.category.getAll)
category_router.getOne("/api/category/:id",controller.category.getOne)
category_router.delete("/api/category/:id",controller.category.delete)
category_router.patch("/api/category/:id",controller.category.update)
category_router.post("/api/category",category_middlewares,controller.category.post)

module.exports = category_router
