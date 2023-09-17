const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const usernameSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true, trimmed: true },
        email: { type: String, required: true, unique: true }, //Need a validation here
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
)

usernameSchema.virtual('friendCount').get(function () {
    return this.friends.length
})

const User = model('User', usernameSchema)

module.exports = {User}