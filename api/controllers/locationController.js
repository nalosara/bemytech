const Location = require("../models/location");

exports.createLocation = (req, res) => {
  const { title, address, location } = req.body;
    
  const newLocation = new Location({ title, address, location });

  res.json(newLocation);

};
