const mongoose = require('mongoose');

const Table = mongoose.model('Table', {
  name: String,
  seatsCount: Number
});

module.exports = Table;
