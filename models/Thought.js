const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {type: String, required: true, minlength: 1, maxlength: 280},
    createdAt: {type: Date, default: Date.now, get: formattedDate},
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

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})

//Creating Getter Function to formatDate//
function formattedDate(){
    dayjs(this.createdAt).format('MM/DD/YYYY HH:ss')
}

const Thought = model('Thought', thoughtSchema)


module.exports = {Thought}