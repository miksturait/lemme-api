const chatRouter = require('./router');
const io = require('socket.io')(3001);

module.exports =  {
  routes: chatRouter.routes()
}

module.exports = () => {
  io.on('connection', (socket) => {
    console.log('connected')
    socket.on('message', (msg) => {
        socket.broadcast.emit('User connected');
    });
  });
}