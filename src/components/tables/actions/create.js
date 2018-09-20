const { createTable } = require('../DAL');

module.exports = async (ctx, next) => {
  ctx.request.body = await createTable(ctx.request.body);

  await next();
}
