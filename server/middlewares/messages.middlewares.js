const messages_validation = require("../validations/messages.validation")

const messages_middleware = (req, res, next) => {
    const { error } = messages_validation.validate(req.body);
    if (!error) {
      next();
    } else {
      const { details } = error;
      res.send({
        message: details[0].message,
        error: true,
      });
    }
  };
  module.exports = messages_middleware