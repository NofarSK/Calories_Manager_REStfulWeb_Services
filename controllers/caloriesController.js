const Calorie = require('../models/caloriesModel');
const Counter = require('../models/counterModel');

const getNextSequence = async (name) => {
    const counter = await Counter.findByIdAndUpdate(
        name,
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
    );
    return counter.seq;
};

exports.addCalorie = async (req, res) => {
    try {
        const { user_id, year, month, day, description, category, amount } = req.body;
        //unique ID

        const id = await getNextSequence('calorieId');

        const newCalorie = new Calorie({ user_id, year, month, day, id, description, category, amount });
        //save in mongodb
        await newCalorie.save();

        res.status(200).json([{ message: 'The calorie added successfully' }]);

    } catch (error) {

        res.status(400).json({ message: 'Error adding calorie', error: error.message });
    }
};


exports.getReport = async (req, res) => {
    try {
        const { user_id, year, month } = req.query;

        // Validate input
        if (!user_id || !year || !month) {
            return res.status(400).json({ message: 'Missing required parameters' });
        }//check ;///////////////////////////////////////////////////////////////

        // Convert parameters to numbers
        const numericUserId = parseInt(user_id);
        const numericYear = parseInt(year);
        const numericMonth = parseInt(month);

        // Query the database
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

        // Populate the report
        calories.forEach(calorie => {
            report[calorie.category].push({
                day: calorie.day,
                description: calorie.description,
                amount: calorie.amount
            });
        });

        res.status(200).json(report);
    } catch (error) {
        console.error('Error generating report:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

