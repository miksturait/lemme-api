const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const tablesSerializer = new JSONAPISerializer('tables', {
  attributes: ['name', 'seatsCount', 'seats'],
  seats: {
    ref: '_id',
    attributes: ['status']
  },
  topLevelLinks: {
    self: 'http://localhost:3000/api/v1/tables'
  }
});

module.exports = tablesSerializer;
