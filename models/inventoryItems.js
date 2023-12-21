const mongoose = require('mongoose');

const inventoryItemsSchema = new mongoose.Schema({
    Product: String,
    Balance: Number,
    Location: String
  });

  const inventoryItems = mongoose.model('inventoryItems', inventoryItemsSchema);
  module.exports = inventoryItems;