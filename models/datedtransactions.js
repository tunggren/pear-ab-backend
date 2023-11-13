const mongoose = require('mongoose');

const datedTransactionSchema = new mongoose.Schema({
    Date: Date,
    Product: String,
    Location: String,
    Quantity: Number,
    Type: String
  });

  const datedTransactions = mongoose.model('datedTransaction', datedTransactionSchema);
  module.exports = datedTransactions;