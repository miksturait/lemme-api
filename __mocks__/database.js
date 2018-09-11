const mongoose = require('mongoose');

mongoose.connect(global.__MONGO_URI__, {
  useNewUrlParser: true
});

const { connection } = mongoose;

connection.on('error', (err) => {
  console.error(err);
});

connection.once('open', () => {
  console.log(`Connected to memory mongodb ${global.__MONGO_URI__}`);
});

module.exports = connection;