const mongoose = require('mongoose');
const agencySchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  equipment: { type: String, required: true },
  manpower: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const Agency = mongoose.model('Agency', agencySchema);
module.exports = Agency;
