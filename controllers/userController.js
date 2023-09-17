const { User } = require('../models/User')


async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);

    } catch (err) {
        res.status(500).json(err)
    }
}
