const { updateTable } = require('../DAL');

module.exports = async (ctx, next) => {
  try {
    await updateTable(ctx.request.id, ctx.request.body);
  } catch(e) {
    ctx.body = { errors: e }
  }

  await next();
};
