const orders_validation = require("../validations/orders.validation")

const orders_middleware = (req, res, next) => {
    const { error } = orders_validation.validate(req.body);
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

  module.exports = orders_middleware