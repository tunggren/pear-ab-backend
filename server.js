const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const inventoryItems = require('./models/inventoryItems');
const datedTransactions = require('./models/datedtransactions')
const initialBalanceTransactions = require('./models/initialbalancetransactions')
const products = require('./models/products')
const warehouses = require('./models/warehouses')

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost/inventory", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.get('/inventoryItems', async (req, res) => {
    try {
        const allInventoryItems = await inventoryItems.find().exec();
        res.json(allInventoryItems);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/inventoryItems', async (req, res) => {
    try {
      const newItem = new InventoryItem(req.body);
      await newItem.save();
      res.status(201).json({ message: 'Item added successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.get('/datedTransactions', async (req, res) => {
    try {
        const alldatedTransactions = await datedTransactions.find().exec();
        res.json(alldatedTransactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/datedTransactions', async (req, res) => {
    try {
      const newDatedTransaction = new DatedTransaction(req.body);
      await newDatedTransaction.save();
      res.status(201).json({ message: 'Dated transaction added successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.get('/initialBalanceTransactions', async (req, res) => {
    try {
        const allinitialBalanceTransactions = await initialBalanceTransactions.find().exec();
        res.json(allinitialBalanceTransactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/initialBalanceTransactions', async (req, res) => {
    try {
      const newinitialBalanceTransaction = new InitialBalanceTransaction(req.body);
      await newinitialBalanceTransaction.save();
      res.status(201).json({ message: 'Initial balance transaction added successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.get('/products', async (req, res) => {
    try {
        const allProducts = await products.find().exec();
        res.json(allProducts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/products', async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      await newProduct.save();
      res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

app.get('/warehouses', async (req, res) => {
    try {
        const allWarehouses = await warehouses.find().exec();
        res.json(allWarehouses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/warehouses', async (req, res) => {
    try {
      const newWarehouse = new Warehouse(req.body);
      await newWarehouse.save();
      res.status(201).json({ message: 'Warehouse added successfully' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });