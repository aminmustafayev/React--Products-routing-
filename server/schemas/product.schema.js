const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema(
    {
      name: String,
      salePrice: Number,
      costPrice: Number,
      imgSrc: String,
      discountPercentage: Number,
      description: String,
      stockCount: Number,
    },
    { timestamps: true }
  );
  module.exports= ProductSchema