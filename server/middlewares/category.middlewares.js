const category_validation = require("../validations/category.validation")

const category_middleware = (req, res, next) => {
    const { error } = category_validation.validate(req.body);
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
  module.exports = category_middleware