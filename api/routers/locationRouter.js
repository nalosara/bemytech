const { createLocation } = require("../controllers/locationController");

const router = require("express").Router();

router.post("/create", createLocation);

module.exports = router;
