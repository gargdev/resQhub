const Agency = require("../models/Agency");

const getAgenciesInRange = async (req, res) => {
  const { latitude, longitude, radius } = req.params;
  const radiusInKm = radius / 6378.1; // Earth's radius in km
  const agencies = await Agency.find({
    latitude: {
      $gte: latitude - radiusInKm,
      $lte: latitude + radiusInKm,
    },
    longitude: {
      $gte: longitude - radiusInKm,
      $lte: longitude + radiusInKm,
    },
  });
  res.json(agencies);
};

module.exports = { getAgenciesInRange };
