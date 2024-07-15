//Nofar Skouri 211939939
//Talia Mulokandov 212615421

const userModle = require('../models/usersModel');

// Controller function to get user details by ID
exports.getUserById = async (req, res) => {

    try {
        const userId = parseInt(req.params.id);

        // Find the user in the database by their ID
        const user = await userModle.findOne({ id: userId });

        // If the user is not found, send a 404 response
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Extract user details to send in the response
        const userDetails = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday
        };

        // Send the user details in the response
        res.status(200).json(userDetails);
    } catch (error) {
        // Handle errors
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};