const Joi = require("joi");

const category_validation = Joi.object({
    name: Joi.string().min(3).alphanum()
})
module.exports = category_validation