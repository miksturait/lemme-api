const { range } = require('lodash');
const { createChat } = require('../DAL');
const io = require('socket.io')(80);

module.exports = async (ctx, next) => {
  console.log(123);
  
  io.emit('this', { will: 'be received by everyone'});
  
  socket.on('private message', (from, msg) => {
    console.log('I received a private message by ', from, ' saying ', msg);
  });

  socket.on('disconnect', () => {
    io.emit('user disconnected');
  });
  
  await next();
}
