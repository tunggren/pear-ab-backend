const mongoose = require('mongoose');

const warehousesSchema = new mongoose.Schema({
    Location: String,
    Warehousenr: String
  });

  const warehouses = mongoose.model('warehouses', warehousesSchema);
  module.exports = warehouses;