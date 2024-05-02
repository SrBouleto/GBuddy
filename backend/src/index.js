require("dotenv").config() // Import 'dotenv' module and configure it.
const express = require("express"); // Import the 'express' module.
const app = express(); // Initialize the express app.
const PORT = process.env.PORT || 4322; // Use the secret PORT at '.env' or :4322: if not found.

// Define the default route.
app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});

app.listen(PORT, (e) => {
    console.log(e);
});