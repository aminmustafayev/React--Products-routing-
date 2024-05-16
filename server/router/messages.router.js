const express = require("express")
const messages_router = express.Router()
const controller = require("../controllers/index")
const messages_middlewares = require("../middlewares/messages.middlewares")


messages_router.get("/api/messages", controller.message.getAll)
messages_router.getOne("/api/messages/:id", controller.message.getOne)
messages_router.delete("/api/messages/:id",controller.message.delete)
messages_router.patch("/api/messages/:id",controller.message.update)
messages_router.post("/api/messages",messages_middlewares,controller.message.post)

const express = require("express");
module.exports = messages_router