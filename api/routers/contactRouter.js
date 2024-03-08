const { validationResult } = require("express-validator");
const {
  createContact,
  deleteContact,
  updateContact,
  getContact,
  getAllContacts,
} = require("../controllers/contactController");
const {
  contactValidator,
  validate,
} = require("../middleware/validation/contactValidation");

const router = require("express").Router();

router.post("/create", contactValidator, validate, createContact);

router.put("/:contactId", contactValidator, validate, updateContact);

router.delete("/:contactId", deleteContact);

router.get("/single/:contactId", getContact);

router.get("/getAllContacts", getAllContacts);

module.exports = router;
