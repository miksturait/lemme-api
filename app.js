const Koa = require('koa');
const Router = require('koa-router');
const tablesSerializer = require('./tables-serializer');
const database = require('./database.js');
const Table = require('./Table');

const app = new Koa();
const router = new Router();

const setContentType = async (ctx, next) => {
  await next();

  ctx.type = 'application/vnd.api+json';
};

router.get('/api/v1/tables', async (ctx, next) => {
  const tables = await Table.find({});
  const payload = tablesSerializer.serialize(tables);

  ctx.body = JSON.stringify(payload)
  await next();
});

app.use(setContentType)
app.use(router.routes());

module.exports = app;
