
const mongoose = require('mongoose');

const channelSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});


module.exports = mongoose.model('Channel', channelSchema);