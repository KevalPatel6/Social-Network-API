const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')
const formattedDate = require('../utils/getter')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: newDate =>  formattedDate(newDate)},
    username: {type: String, required: true},
    reactions: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reactionSchema'
        }
    ]
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

reactionSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

const Thought = model('Thought', thoughtSchema)


module.exports = {Thought}