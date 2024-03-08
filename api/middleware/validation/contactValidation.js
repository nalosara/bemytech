const { check, validationResult } = require("express-validator");

exports.contactValidator = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("First name is missing!"),
  check("lastName").trim().not().isEmpty().withMessage("Last name is missing!"),
  check("phoneNumber")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Phone number is missing!"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req).array();

  if (error.length) {
    res.status(401).json({ error: error[0].msg });
  }

  next();
};
