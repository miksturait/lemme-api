const JSONAPISerializer = require('jsonapi-serializer').Serializer;

const chatsSerializer = new JSONAPISerializer('chats', {
  attributes: ['name', 'seatsCount', 'seats'],
  seats: {
    ref: '_id',
    attributes: ['status']
  },
  topLevelLinks: {
    self: 'http://localhost:3000/api/v1/chats'
  }
});

module.exports = chatsSerializer;
