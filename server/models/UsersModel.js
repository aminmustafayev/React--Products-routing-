const mongoose = require("mongoose");
const UsersSchema = require('../schemas/users.schema')


const UsersModel = mongoose.model("Users", UsersSchema);

module.exports = UsersModel