require('./database');

const Koa = require('koa');
const tables = require('./src/components/tables');
const logger = require('koa-logger')
const cors = require('@koa/cors');
const io = require('socket.io')(3001);
const app = new Koa();

const setContentType = async (ctx, next) => {
  await next();
  ctx.type = 'application/vnd.api+json';
};

app.use(cors());
app.use(logger());
app.use(setContentType);
app.use(tables.routes);

io.on('connection', (socket) => {
  console.log('connected')
  
  socket.on('message', (message) => {
    let split = socket.request.headers.cookie.replace('; ', '=').split('=')
    let index = split.indexOf('socketUserName')
    let userName = split[index+1]
  
    io.sockets.emit('message', {
      payload: message,
      userName
    })
  });
});

module.exports = app;
