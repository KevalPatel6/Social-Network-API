const { Thought, User, reactionSchema } = require("../models");

async function getThoughts(req, res) {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);

    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
}

async function getSingleThought(req, res) {
    try {
        const thought = await Thought.findOne({_id: req.params.thoughtId})

        if (!thought) {
            return res.status(400).json({ message: 'No thought with that Id' })
        }

        res.json(thought)

    } catch (err) {
        console.error(err)
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
        console.error(err)
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

        res.json({username: thought.username, thought: thought.thoughtText})

    } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteThought(req, res) {
    try {
        const oldThought = await Thought.findById(req.params.thoughtId)
        const thought = await Thought.findOneAndDelete({
            _id: req.params.thoughtId
        })

        await User.findOneAndUpdate(
            { thoughts: req.params.thoughtId },
            { $pull: { thoughts: req.params.thoughtId } },
            { new: true }
          );

        res.json(`Removed thought "${oldThought.thoughtText}".`)

    } catch (err) {
        res.status(500).json(err)
    }
}


async function createReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
            {_id: req.params.thoughtId},
            {$push: {reactions: req.body}},
            {new: true}
        )

        if(!reaction){
            return res.status(400).json({ message: 'There is no thought with that thoughtId' })
        }
        
        res.json(`Added "${req.body.reactionBody}" to thought: "${reaction.thoughtText}"`)

   } catch (err) {
        res.status(500).json(err)
    }
}

async function deleteReaction(req, res) {
   try {
    const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: {_id: req.params.reactionId }}},
        { new: true }
    )
   

    // const reaction = thought.reactions.find(((reaction)=>reaction.reactionID===req.params.reactionId))

    if (!thought._id){
        return res.status(404).json({message: 'Could not find a thought with this thoughtId'})
    }

    const deletedReaction = thought.reactions.find(reaction=>reaction.reactionID===req.params.reactionId)

    if(deletedReaction){
        return res.status(404).json({message: 'Sorry there was an error while trying to delete the reaction'})
    }

    res.json(`Successfully deleted reaction with Id: ${req.params.reactionId} from thought: "${thought.thoughtText}"`)

   }  catch (err) {
    console.error(err)
    res.status(500).json(err)
}

}

module.exports = { getThoughts, getSingleThought, createThought, updateThought, deleteThought, createReaction, deleteReaction }