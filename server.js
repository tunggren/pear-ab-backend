const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Connect to MongoDB (Assuming you have MongoDB running locally)
mongoose.connect('mongodb://localhost/inventory', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a simple inventory item schema
const inventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

const Inventory = mongoose.model('Inventory', inventorySchema);

app.use(bodyParser.json());
app.use(cors());

// Get current inventory
app.get('/api/inventory', async (req, res) => {
  try {
    const inventory = await Inventory.find();
    res.json(inventory);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Update inventory
app.post('/api/inventory', async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const existingItem = await Inventory.findOne({ name });

    if (existingItem) {
      existingItem.quantity += quantity;
      await existingItem.save();
    } else {
      const newItem = new Inventory({ name, quantity });
      await newItem.save();
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
