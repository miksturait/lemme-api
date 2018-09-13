const { createTable } = require('../DAL');

module.exports = async (ctx, next) => {
  ctx.body = await createTable(ctx.request.body);

  await next();
}
