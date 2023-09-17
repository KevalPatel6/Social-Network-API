const { Thought, User } = require("../models");

async function getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();

        res.json(thoughts);

    } catch (err) {
        res.status(500).json(err)
    }
}

async function getSingleThought(req, res) {
    try {
        const thought = await Thought.findOne(req.params.thoughtId)

        if (!thought) {
            return res.status(400).json({ message: 'No thought with that Id' })
        }

        res.json(thought)

    } catch (err) {
        res.status(500).json(err)
    }
}

async function createThought(req, res) {
    try {
        const thought = await Thought.create(req.body)

        const user = await User.findOneAndUpdate(
            { username: thought.username },
            { $push: { thoughts: thought._id } },
            { new: true }
        )

        res.json({ thought: thought, user: user })

    } catch (err) {
        res.status(500).json(err)
    }
}

async function updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { new: true }
        )
    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteThought(req, res) {
    try {
        const oldThought = await Thought.findById(req.params.thoughtId)
        const thought = await Thought.findByIdAndDelete({
            _id: req.params.thoughtId
        })
        const user = await User.findOne({
            username: oldThought.username
        })

        res.json(`Removed thought ${oldThought}. Resulting user thoughts: ${user.thoughts}`)

    } catch (err) {
        res.status(500).json(err)
    }
}


async function createReaction(req, res) {
    try {
        const reaction = await 
    
   } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteReaction(req, res) {
   try {
       const reaction = await 
    
   }  catch (err) {
    res.status(500).json(err)
}

}

module.exports = { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction }