const mongoose = require('mongoose');

const initialBalanceTransactionsSchema = new mongoose.Schema({
    Produkt: String,
    Till: String,
    Antal: Number,
    Typ: String
  });

  const initialBalanceTransactions = mongoose.model('initialBalanceTransactions', initialBalanceTransactionsSchema);
  module.exports = initialBalanceTransactions;