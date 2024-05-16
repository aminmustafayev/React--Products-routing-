const express = require("express");
const user_router = express.Router()
const controller = require("../controllers/index")
const user_middlewares = require("../middlewares/user.middlewares")


user_router.get("/api/users",controller.user.getALL)
user_router.getOne("/api/users/:id",controller.user.getOne)
user_router.delete("/api/users/:id",controller.user.delete)
user_router.post("/api/users",user_middlewares,controller.user.post)
user_router.patch("/api/users/:id", controller.user.update)

module.exports = user_router