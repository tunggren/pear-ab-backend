const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    Productnr: String,
    Product: String,
    Price: Number
  });

  const products = mongoose.model('products', productsSchema);
  module.exports = products;