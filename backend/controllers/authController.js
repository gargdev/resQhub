const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Agency = require('../models/Agency');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

const registerAgency = async (req, res) => {
  const { name, specialty, equipment, manpower, latitude, longitude, email, password } = req.body;
  const agencyExists = await Agency.findOne({ email });
  if (agencyExists) {
    res.status(400);
    throw new Error('Agency already exists');
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const agency = await Agency.create({
    name,
    specialty,
    equipment,
    manpower,
    latitude,
    longitude,
    email,
    password: hashedPassword,
  });
  if (agency) {
    res.status(201).json({
      _id: agency._id,
      name: agency.name,
      email: agency.email,
      token: generateToken(agency._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid agency data');
  }
};

const authAgency = async (req, res) => {
  const { email, password } = req.body;
  const agency = await Agency.findOne({ email });
  if (agency && (await bcrypt.compare(password, agency.password))) {
    res.json({
      _id: agency._id,
      name: agency.name,
      email: agency.email,
      token: generateToken(agency._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
};

module.exports = { registerAgency, authAgency };
