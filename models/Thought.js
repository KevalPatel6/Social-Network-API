const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')
const reactionSchema = require('./Reaction')
const {User} = require('./User')

const thoughtSchema = new mongoose.Schema({
    thoughtText: {
        type: String, 
        required: true, 
        minlength: 1, 
        maxlength: 280},
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: formattedDate},
    username: {
        type: String, 
        required: true},
    reactions: [reactionSchema]
},
{
    toJSON: {
      getters: true,
      virtuals: true, //Do I need both?//
    },
    id: false
  }
)

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length
})


//Creating Getter Function to formatDate//
function formattedDate(value){
    return dayjs(value).format('MM/DD/YYYY HH:ss')
}

const Thought = model('Thought', thoughtSchema)


module.exports = {Thought}