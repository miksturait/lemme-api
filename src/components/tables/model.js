const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
  status: {
    type: Boolean,
    default: false
  }
});

const tableSchema = new mongoose.Schema({
  name: String,
  seatsCount: Number,
  seats: [seatSchema]
});

const Table = mongoose.model('Table', tableSchema);

module.exports = Table;
