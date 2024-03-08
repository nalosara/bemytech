const { check } = require("express-validator");

exports.locationValidator = [
  check("title")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Location title is missing!"),
    check("address")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Address title is missing!"),
];
