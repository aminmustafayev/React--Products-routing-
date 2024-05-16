const product_validation = require("../validations/product.validation")


const product_middleware = (req, res, next) => {
    const { error } = product_validation.validate(req.body);
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

  module.exports = product_middleware