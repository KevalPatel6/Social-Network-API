const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now},
    username: {type: String, required: true},
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Reaction'
        }
    ]
})

//Creating a getter method to format the timestamp
reactionSchema.methods.formatDate = function(){
    dayjs(this.createdAt).format('MM/DD/YYYY HH:ss')
}

const Thought = model('Thought', thoughtSchema)


module.exports = {Thought}




