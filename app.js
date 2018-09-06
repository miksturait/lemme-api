const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const tablesSerializer = require('./tables-serializer');
const JSONAPIDeserializer = require('jsonapi-serializer').Deserializer;
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

router.post('/api/v1/tables', async (ctx, next) => {
  const deserializeOption = {
    keyForAttribute: 'camelCase'
  };
  const payload = await new JSONAPIDeserializer(deserializeOption)
    .deserialize(ctx.request.body);

  const newTable = await Table.create(payload);
  const response = tablesSerializer.serialize(newTable);

  ctx.body = JSON.stringify(response)
  await next();
});

app.use(bodyParser());
app.use(setContentType);
app.use(router.routes());

module.exports = app;
