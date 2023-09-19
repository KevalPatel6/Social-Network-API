const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')

const usernameSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            //Adding a mongoose validation for email address using a Regex pattern//
            validate:
                { validator: function(value){
                    const regexEmailPattern = new RegExp(`^[a-zA-Z0-9_\\-+~]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{3,}$`)
                    return regexEmailPattern.test(value)
                },
                message: 'The email entered is not a valid email address'}
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    {
        toJSON: {
            virtuals: true,
        },
        _id: false,
    }
)

usernameSchema.virtual('friendCount').get(function () {
    return this.friends.length
})



const User = model('User', usernameSchema)

module.exports = { User }