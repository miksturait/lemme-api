const { destroyChat } = require('../DAL');

module.exports = async (ctx, next) => {
  try {
    await destroyChat(ctx.params.id);
    ctx.body = {};
  } catch(e) {
    ctx.body = { errors: e };
  }

  await next();
};
