const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
    userId: String,
    totalPrice: Number,
    items:Array
  },
  { timestamps: true }
  );
  module.exports=OrdersSchema
  