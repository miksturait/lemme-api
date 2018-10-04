require('./database');

const Koa = require('koa');
const tables = require('./src/components/tables');
const logger = require('koa-logger')
const cors = require('@koa/cors');
const webSocket = require('./src/components/chat/index')
const app = new Koa();

const setContentType = async (ctx, next) => {
  await next();
  ctx.type = 'application/vnd.api+json';
};

app.use(cors());
app.use(logger());
app.use(setContentType);
app.use(tables.routes);
app.use(webSocket)

module.exports = app;
