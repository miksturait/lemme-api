const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', {
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
