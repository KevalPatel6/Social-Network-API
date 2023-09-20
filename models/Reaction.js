const mongoose = require('mongoose');
const dayjs = require('dayjs')
const {ObjectId} = require('bson')
const { Schema, Types } = require('mongoose');

const reactionSchema = new mongoose.Schema({
  reactionID: { type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()},
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
function formattedDate(value){
  return dayjs(value).format('MM/DD/YYYY HH:ss')
}

module.exports = reactionSchema 