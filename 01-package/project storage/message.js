const mongoose = require('mongoose')

const messageSchema = mongoose.Schema({
  user: {
    type: String,
    required: true,
    c
  },
  channel: {
    type: String,
    required: true,
    maxlength: 100
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
    maxlength: 1000
  }
})

/* messageSchema
    .virtual('url')
    .get(() => {
        return `/catalog/bookinstance/${this._id}`
    }) */


module.exports = mongoose.model('Message', messageSchema)