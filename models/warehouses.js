const mongoose = require('mongoose');

const warehousesSchema = new mongoose.Schema({
    Lagernr: Number,
    Stad: String
  });

  const warehouses = mongoose.model('warehouses', warehousesSchema);
  module.exports = warehouses;