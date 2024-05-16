const user_validation = require("../validations/user.validation");

const user_middleware = (req, res, next) => {
    const { error } = user_validation.validate(req.body);
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
  
  module.exports = user_middleware;