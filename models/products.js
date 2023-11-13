const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    Produktnr: String,
    Benämning: String,
    Pris: Number
  });

  const products = mongoose.model('products', productsSchema);
  module.exports = products;