const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const { Schema, model } = require('mongoose')
const dayjs = require('dayjs')

const reactionSchema = new mongoose.Schema({
  reactionID: { type: ObjectId, default: new ObjectId},
  reactionBody: { type: String, required: true, maxlength: 280 },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, get: formattedDate}
},
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

//Creating Getter Function to formatDate//
function formattedDate(){
  dayjs(this.createdAt).format('MM/DD/YYYY HH:ss')
}

module.exports = { reactionSchema }