const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
    fullName:String,
    email:String,
    title:String,
    message:String
  },
  { timestamps: true }
  );
  module.exports=MessagesSchema