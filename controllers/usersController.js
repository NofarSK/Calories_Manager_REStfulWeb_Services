const User = require('../models/usersModel');



exports.getUserById = async (req, res) => {

    try {
        const userId = parseInt(req.params.id);
        const user = await User.findOne({ id: userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }


        const userDetails = {
            id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            birthday: user.birthday
        };

        res.status(200).json(userDetails);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};