const express = require('express');
const connectDB = require('./database');
const caloriesRoutes = require('./routes/caloriesRoutes');
const usersRoutes = require('./routes/usersRoutes');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Get the port number from environment variables or default to 3000
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(caloriesRoutes);
app.use(usersRoutes);

// Define a route for '/about' that responds with a JSON array
app.get('/about', function (req, res) {
    res.status(200).json(
        [{ "firstname": "", "lastname": "", "id": 123, "email": "" },
        { "firstname": "", "lastname": "", "id": 456, "email": "" }]);
});

// Connect to the database and start the server
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((error) => {
    // Log an error message if the server fails to start
    console.error(`Failed running the server at http://localhost:${port}`);
});


