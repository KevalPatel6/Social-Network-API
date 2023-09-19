const { User } = require('../models/User')

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.json(users);

    } catch (err) {
        res.status(500).json(err)
    }
}

async function getSingleUser(req, res) {
    try {
        const user = await User.findOne({ _id: req.params.userId })

        if (!user) {
            return res.status(400).json({ message: 'No user with that Id' })
        }

        res.json(user)

    } catch (err) {
        res.status(500).json(err)
    }
}

async function createUser(req, res) {
    try {
        const user = await User.create({
            username: req.body.username,
            email: req.body.email
        })

        res.json(user)
        
    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateUser(req, res) {
    try {
        const oldUser = await User.findOne({ _id: req.params.userId })

        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { new: true }
        )

        if (!user) {
            return res.status(404).json({ message: "No user exists with that Id" })
        }

        res.json({ message: `
        Updated user: ${oldUser.username}'s information from:
        username: ${oldUser.username}
        email: ${oldUser.email} 
        to 
        username: ${user.username}
        email: ${user.email}` })

    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({
            _id: req.params.userId
        })

        if (!user) {
            return res.status(404).json({ message: 'Could not delete user since no user was found with this id' })
        }

        res.json({ message: `Successfully deleted user: ${user.username}` })

    } catch (err) {
        res.status(500).json(err)
    }
}

async function addFriend(req, res) {
    try {
        //Searching by userId and adding a friend by the friendId in params//
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.params.friendId } },
            { new: true }
        )

        const friend = await User.findOne({_id: req.params.friendId})

        if (!user) {
            return res.status(404).json({ message: 'No user was found with this Id' })
        }

        if (!friend) {
            return res.status(404).json({ message: 'No friend was found with this friendId' })
        }

        res.json(`Successfully added ${friend.username} as a friend to ${user.username}`)

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

async function deleteFriend() {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )

        const friend = await User.findOne(req.params.friendId)

        if (!user) {
            return res.status(404).json({ message: 'No user was found with this Id' })
        }

        if (!friend) {
            return res.status(404).json({ message: 'No friend was found with this friendId' })
        }

        res.json(`Successfully deleted ${friend.username} as friend from ${user.username}`)

    } catch (error) {
        res.status(500).json(err)
    }
}

module.exports = { getUsers, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend }