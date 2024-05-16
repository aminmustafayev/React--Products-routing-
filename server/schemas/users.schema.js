const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
    {
      username: String,
      password: String,
      email: String,
      profileImg: String,
      balance: Number,
    },
    { timestamps: true }
  );

module.exports = UsersSchema
