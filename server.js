//Express används för att kunna skapa servern
const express = require("express");
//Importerar mongoose för att kunna interagera med mongoDB-databasen
const mongoose = require("mongoose");
const cors = require("cors");
//Används för att kunna hantera JSON requests
const bodyParser = require("body-parser");
require("dotenv").config();

const inventoryItems = require("./models/inventoryItems");
const datedTransactions = require("./models/datedtransactions");
const initialBalanceTransactions = require("./models/initialbalancetransactions");
const products = require("./models/products");
const warehouses = require("./models/warehouses");

//Här skapas en instans av express-applikationen
const app = express();
const PORT = 3000;

//Här connectar vi till mongoDB-databasen som heter inventory
mongoose.connect("mongodb://localhost/inventory", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

//Nedan är en .get, .post, .put och .delete metod för varje collection i databasen

app.get("/inventoryItems", async (req, res) => {
  try {
    const allInventoryItems = await inventoryItems.find().exec();
    res.json(allInventoryItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/inventoryItems", async (req, res) => {
  try {
    const newItem = new inventoryItems(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item added successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/inventoryItems/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedItem = req.body;

    const result = await inventoryItems.findByIdAndUpdate(itemId, updatedItem, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/inventoryItems/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await inventoryItems.findByIdAndDelete(itemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/datedTransactions", async (req, res) => {
  try {
    const alldatedTransactions = await datedTransactions.find().exec();
    res.json(alldatedTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/datedTransactions", async (req, res) => {
  try {
    const newDatedTransaction = new datedTransactions(req.body);
    await newDatedTransaction.save();
    res.status(201).json({ message: "Dated transaction added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
});

app.put("/datedTransactions/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedDatedTransaction = req.body;

    const result = await datedTransactions.findByIdAndUpdate(
      itemId,
      updatedDatedTransaction,
      { new: true }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/datedTransactions/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await datedTransactions.findByIdAndDelete(itemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/initialBalanceTransactions", async (req, res) => {
  try {
    const allinitialBalanceTransactions = await initialBalanceTransactions
      .find()
      .exec();
    res.json(allinitialBalanceTransactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/initialBalanceTransactions", async (req, res) => {
  try {
    const newinitialBalanceTransaction = new initialBalanceTransactions(
      req.body
    );
    await newinitialBalanceTransaction.save();
    res
      .status(201)
      .json({ message: "Initial balance transaction added successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/initialBalanceTransactions/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedInitialBalanceTransaction = req.body;

    const result = await initialBalanceTransactions.findByIdAndUpdate(
      itemId,
      updatedInitialBalanceTransaction,
      { new: true }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/initialBalanceTransactions/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await initialBalanceTransactions.findByIdAndDelete(itemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/products", async (req, res) => {
  try {
    const allProducts = await products.find().exec();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new products(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedProduct = req.body;

    const result = await products.findByIdAndUpdate(itemId, updatedProduct, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/products/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await products.findByIdAndDelete(itemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/warehouses", async (req, res) => {
  try {
    const allWarehouses = await warehouses.find().exec();
    res.json(allWarehouses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/warehouses", async (req, res) => {
  try {
    const newWarehouse = new warehouses(req.body);
    await newWarehouse.save();
    res.status(201).json({ message: "Warehouse added successfully" });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.put("/warehouses/:id", async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedWarehouse = req.body;

    const result = await warehouses.findByIdAndUpdate(
      itemId,
      updatedWarehouse,
      { new: true }
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/warehouses/:id", async (req, res) => {
  try {
    const itemId = req.params.id;

    const result = await warehouses.findByIdAndDelete(itemId);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Startar servern och consol-loggar att den är igång
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
