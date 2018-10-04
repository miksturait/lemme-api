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
  socket.on('message', (msg) => {
      io.sockets.emit('User connected');
  });
});

module.exports = app;
