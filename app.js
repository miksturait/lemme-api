const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();



const setContentType = async (ctx, next) => {
  await next();

  ctx.type = 'application/vnd.api+json';
};

router.get('/api/v1/tables', async (ctx, next) => {
  ctx.body = JSON.stringify({});
  await next()
});

app.use(setContentType)
app.use(router.routes());

module.exports = app;
