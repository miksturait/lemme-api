const chatRouter = require('./router');
const io = require('socket.io')(3001);

module.exports =  {
  routes: chatRouter.routes()
}