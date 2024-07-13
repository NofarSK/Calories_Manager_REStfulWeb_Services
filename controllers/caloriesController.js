//Nofar Skouri 211939939
//Talia Mulokandov 212615421

const Calorie = require('../models/caloriesModel');
const Counter = require('../models/counterModel');

// Function to get the next sequence number for a given counter name
const getNextSequence = async (name) => {
    const counter = await Counter.findByIdAndUpdate(
        name,
        // Increment the sequence number by 1
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    // Return the updated sequence number
    return counter.seq;
};

// Controller function to add a new calorie entry
exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;

        // Generate a unique ID for the new calorie entry
        const id = await getNextSequence('calorieId');

        // Create a new Calorie with the provided data
        const newCalorie = new Calorie({ user_id, year, month, day, id, description, category, amount });

        // Save the new calorie entry in the database
        await newCalorie.save();

        res.status(200).json([{ message: 'The calorie added successfully' }]);

    } catch (error) {
        // Handle errors
        res.status(400).json({ message: 'Error adding calorie', error: error.message });
    }
};

// Controller function to generate a calorie report
exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;

        // Validate input parameters
        if (!user_id || !year || !month) {
            return res.status(400).json({ message: 'Missing required parameters' });
        }

        // Convert parameters to numbers
        const numericUserId = parseInt(user_id);
        const numericYear = parseInt(year);
        const numericMonth = parseInt(month);

        // Query the database for calorie entries matching the specified criteria
        const calories = await Calorie.find({
            user_id: numericUserId,
            year: numericYear,
            month: numericMonth
        });

        // Initialize report object with all categories
        const report = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        };

        // Populate the report with calorie entries grouped by category
        calories.forEach(calorie => {
            report[calorie.category].push({
                day: calorie.day,
                description: calorie.description,
                amount: calorie.amount
            });
        });

        // Send the generated report as a response
        res.status(200).json(report);
    } catch (error) {
        // Handle errors
        console.error('Error generating report:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

