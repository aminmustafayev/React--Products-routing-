const mongoose = require("mongoose")
const CategorySchema = require("../schemas/category.schema")

const CategoryModel = mongoose.model("Category", CategorySchema)

module.exports = CategoryModel