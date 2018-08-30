const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const tablesSerializer = new JSONAPISerializer('tables', {
  attributes: ['name', 'seatsCount']
});

module.exports = tablesSerializer;
