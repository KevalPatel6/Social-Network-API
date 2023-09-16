const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')
const {Thought, User} = require('../models')
const formattedDate = require('../utils/getter')

const reactionSchema = new mongoose.Schema({
    reactionID: {type: ObjectId},
    reactionBody: {type: String, required: true, maxlength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, get: newDate =>  formattedDate(newDate)}
},
{
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

//Creating a getter method to format the timestamp
reactionSchema.methods.getter = function(){
    dayjs(this.createdAt).format('MM/DD/YYYY HH:ss')
}

module.exports = {Reaction}