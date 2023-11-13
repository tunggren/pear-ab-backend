const mongoose = require('mongoose');

const datedTransactionSchema = new mongoose.Schema({
    Datum: Date,
    Produkt: String,
    TillFrån: String,
    Antal: Number,
    Typ: String
  });

  const datedTransactions = mongoose.model('datedTransaction', datedTransactionSchema);
  module.exports = datedTransactions;