const { isValidObjectId } = require("mongoose");
const Contact = require("../models/contact");

exports.createContact = async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;
  const alreadyExists = await Contact.findOne({ firstName, lastName });

  if (alreadyExists)
    return res.status(401).json({ error: "Please use a different name!" });

  const newContact = new Contact({ firstName, lastName, phoneNumber });

  console.log(newContact);
  await newContact.save();

  res.json({
    contact: {
      id: newContact._id,
      firstName,
      lastName,
      phoneNumber,
    },
  });
};

exports.deleteContact = async (req, res) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId))
    return res.status(401).json({ error: "Invalid request!" });

  const contact = await Contact.findById(contactId);
  if (!contact) return res.status(404).json({ error: "Contact not found!" });

  await Contact.findByIdAndDelete(contactId);

  res.json({ message: "Contact deleted successully!" });
};

exports.updateContact = async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;
  const { contactId } = req.params;
  if (!isValidObjectId(contactId))
    return res.status(401).json({ error: "Invalid request!" });

  const contact = await Contact.findById(contactId);
  if (!contact) return res.status(404).json({ error: "Contact not found!" });

  contact.firstName = firstName;
  contact.lastName = lastName;
  contact.phoneNumber = phoneNumber;

  await contact.save();

  res.json({
    contact: {
      id: contact._id,
      firstName,
      lastName,
      phoneNumber,
    },
  });
};

exports.getContact = async (req, res) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId))
    return res.status(401).json({ error: "Invalid request!" });

  const contact = await Contact.findById(contactId);
  if (!contact) return res.status(404).json({ error: "Contact not found!" });

  const { firstName, lastName, phoneNumber } = contact;

  res.json({
    contact: {
      id: contact._id,
      firstName,
      lastName,
      phoneNumber,
    },
  });
};

exports.getAllContacts = async (req, res) => {
  const contacts = await Contact.find();

  if (!contacts || contacts.length === 0) {
    return res.status(404).json({ error: "Contacts not found!" });
  }

  res.json({ contacts: contacts.map((contact) => ({
    id: contact._id,
    firstName: contact.firstName,
    lastName: contact.lastName,
    phoneNumber: contact.phoneNumber
  })) });
};
