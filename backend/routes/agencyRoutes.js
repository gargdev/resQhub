const express = require('express');
const router = express.Router();
const Agency = require('../models/Agency');
const { getDistance } = require('geolib');

// Distance route
router.get('/inrange', async (req, res) => {
  const { lat, lng, radius } = req.query;
  const latitude = parseFloat(lat);
  const longitude = parseFloat(lng);
  const distanceRadius = parseInt(radius);

  try {
    const agencies = await Agency.find();
    const agenciesInRange = agencies.filter((agency) => {
      const distance = getDistance(
        { latitude, longitude },
        { latitude: agency.latitude, longitude: agency.longitude }
      );
      return distance <= distanceRadius;
    });

    res.json(agenciesInRange);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get all agencies
router.get('/allagencies', async (req, res) => {
  try {
    const agencies = await Agency.find();
    res.json(agencies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
