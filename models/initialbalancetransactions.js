const mongoose = require('mongoose');

const initialBalanceTransactionsSchema = new mongoose.Schema({
    Product: String,
    Location: String,
    Quantity: Number,
    Type: String
  });

  const initialBalanceTransactions = mongoose.model('initialBalanceTransactions', initialBalanceTransactionsSchema);
  module.exports = initialBalanceTransactions;