const Joi = require("joi");

const messages_validation = Joi.object({
    fullName:Joi.string().alphanum().min(3).max(15).required(),
    email:Joi.string().email(),
    title:Joi.string().min(4).max(25).alphanum(),
    message:Joi.string().min(5).max(25)
})