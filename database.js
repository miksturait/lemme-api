const mongoose = require('mongoose');

const { MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const { connection } = mongoose;

connection.on('error', (err) => {
  console.error(err);
});

connection.once('open', () => {
  console.log('Connected to mongodb');
});

module.exports = connection;
