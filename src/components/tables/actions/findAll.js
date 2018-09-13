const { findAll } = require('../DAL');

module.exports = async (ctx, next) => {
  ctx.request.body = await findAll();

  await next();
};
