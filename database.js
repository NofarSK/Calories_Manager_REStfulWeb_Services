const mongoose = require('mongoose');

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Use mongoose to connect to the MongoDB URI specified in environment variables
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: 'caloriesManagement' // db name
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

// Export the connectDB function for use in other parts of the application
module.exports = connectDB;