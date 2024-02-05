const express = require('express');
const app = express();

// Parse requests of content-type - application/json
app.use(express.json());
// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Simple route
app.get('/', (req, res) => {
    res.json({ message: "Welcome to sequelize application." });
});

// Set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on https://localhost:3000.");
})