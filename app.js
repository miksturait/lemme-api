const Koa = require('koa');
const Router = require('koa-router');
const tablesSerializer = require('./tables-serializer');
const database = require('./database.js');

const app = new Koa();
const router = new Router();

const setContentType = async (ctx, next) => {
  await next();

  ctx.type = 'application/vnd.api+json';
};

router.get('/api/v1/tables', async (ctx, next) => {
  const data = [
    { id: '1', name: 'First table', seatsCount: 10 },
    { id: '2', name: 'Second table', seatsCount: 5 }
  ];

  const payload = tablesSerializer.serialize(data);

  ctx.body = JSON.stringify(payload)
  await next()
});

app.use(setContentType)
app.use(router.routes());

module.exports = app;
