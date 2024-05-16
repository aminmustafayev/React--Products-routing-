const mongoose = require("mongoose");
const MessagesSchema = require("../schemas/message.schema");

const MessagesModel = mongoose.model("Messages", MessagesSchema)

module.exports= MessagesModel