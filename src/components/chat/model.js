const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    default: false
  }
});

const chatSchema = new mongoose.Schema({
  name: String,
  seatsCount: Number,
  seats: [seatSchema]
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
