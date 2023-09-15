const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const {Thought, Reaction} = require('../models')
const { Schema, model } = require('mongoose')

const usernameSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, required: true, unique: true }, //Need a validation here
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'reactionSchema'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

usernameSchema.virtual('friendCount').get(function(){
    return this.friends.length
})

const User = model('User', usernameSchema)




module.exports = {User}