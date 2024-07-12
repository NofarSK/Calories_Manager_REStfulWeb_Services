const express = require('express');
const connectDB = require('./database');
const caloriesRoutes = require('./routes/caloriesRoutes');
const usersRoutes = require('./routes/usersRoutes');

require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(caloriesRoutes);
app.use(usersRoutes);

app.get('/about', function (req, res) {
    res.status(200).json(
        [{ "firstname": "Nofar", "lastname": "Skouri", "id": 211939939, "email": "nofar1608@gmail.com" },
        { "firstname": "Talia", "lastname": "Mulokandov", "id": 212615421, "email": "taliamulo@gmail.com" }]);
});

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}).catch((error) => {
    console.error(`Failed running the server at http://localhost:${port}`);
});


