const mongoose = require('mongoose');

const inventoryItemsSchema = new mongoose.Schema({
    Produkt: String,
    Lagersaldo: Number,
    Färdigvarulager: String
  });

  const inventoryItems = mongoose.model('inventoryItems', inventoryItemsSchema);
  module.exports = inventoryItems;