const Joi = require("joi");

const product_validation = Joi.object({
    name:Joi.string().alphanum().min(3).max(15).required() ,
    salePrice: Joi.number().integer(),
    costPrice:Joi.number().integer() ,
    imgSrc: Joi.string().uri() ,
    discountPercentage: Joi.number().integer(),
    description:Joi.string().alphanum().min(3).max(30).required() ,
    stockCount: Joi.number().integer()
})
module.exports= product_validation