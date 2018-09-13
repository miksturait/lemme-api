const { destroyTable } = require('../DAL');

module.exports = async (ctx, next) => {
  try {
    await destroyTable(ctx.params.id);
    ctx.body = {};
  } catch(e) {
    ctx.body = { errors: e };
  }

  await next();
};
