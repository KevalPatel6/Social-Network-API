const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const dayjs = require('dayjs')

const thoughtSchema = new mongoose.Schema({
    reactionID: {type: ObjectId},
    reactionBody: {type: String, required: true, maxlength: 280},
    username: {type: String, required: true},
    createdAt: {type: Date, default: Date.now, }
})

//Creating a getter method to format the timestamp
reactionSchema.methods.getter = function(){
    dayjs(this.createdAt).format('MM/DD/YYYY')
}




module.exports = Thought




