const mongoose = require('mongoose');

const datedTransactionSchema = new mongoose.Schema({
    Date: String,
    Product: String,
    Location: String,
    Quantity: Number,
    Type: String
  });

  const datedTransactions = mongoose.model('datedTransaction', datedTransactionSchema);
  module.exports = datedTransactions;