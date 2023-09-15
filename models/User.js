const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const usernameSchema = new mongoose.Schema({
    username: {type: String, unique: true, required: true},
    email: {type: String, required: true, unique: true}, //Need a validation here
    thoughts: []

})

//Create a trimmed function for the username