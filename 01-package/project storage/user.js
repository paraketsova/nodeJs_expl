const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: 100
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  channels: {
    type: String
  },
  online: {
    type: Boolean,
    default: false,
  },
})


module.exports = mongoose.model('User', UserSchema)