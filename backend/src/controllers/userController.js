const userService = require('../services/userService');

const userController = {
    populate: async (req, res) => {
        try {
            await userService.populateUsers();
            res.send('Inserted 3 users into database.');
        } catch (err) {
            console.error(err);
            res.status(500).send('Error populating users');
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).send('Database error');
        }
    },

    searchUser: async (req, res) => {
        try {
            const { id } = req.body;
            if (!id) {
                return res.status(400).json({ error: 'No ID provided' });
            }

            const parsedId = parseInt(id, 10);
            if (isNaN(parsedId)) {
                return res.status(400).json({ error: 'Invalid ID format' });
            }

            const users = await userService.getUserById(parsedId);
            res.json(users);
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = userController;
