const Joi = require("joi");


const orders_validation = Joi.object({
    userId: Joi.number().integer(),
    totalPrice:Joi.number().integer(),
    items:  Joi.array()
})